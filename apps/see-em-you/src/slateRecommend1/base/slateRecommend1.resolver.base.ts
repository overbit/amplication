/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SlateRecommend1 } from "./SlateRecommend1";
import { SlateRecommend1CountArgs } from "./SlateRecommend1CountArgs";
import { SlateRecommend1FindManyArgs } from "./SlateRecommend1FindManyArgs";
import { SlateRecommend1FindUniqueArgs } from "./SlateRecommend1FindUniqueArgs";
import { CreateSlateRecommend1Args } from "./CreateSlateRecommend1Args";
import { UpdateSlateRecommend1Args } from "./UpdateSlateRecommend1Args";
import { DeleteSlateRecommend1Args } from "./DeleteSlateRecommend1Args";
import { SlateRecommend1Service } from "../slateRecommend1.service";
@graphql.Resolver(() => SlateRecommend1)
export class SlateRecommend1ResolverBase {
  constructor(protected readonly service: SlateRecommend1Service) {}

  async _slateRecommend1sMeta(
    @graphql.Args() args: SlateRecommend1CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SlateRecommend1])
  async slateRecommend1s(
    @graphql.Args() args: SlateRecommend1FindManyArgs
  ): Promise<SlateRecommend1[]> {
    return this.service.slateRecommend1s(args);
  }

  @graphql.Query(() => SlateRecommend1, { nullable: true })
  async slateRecommend1(
    @graphql.Args() args: SlateRecommend1FindUniqueArgs
  ): Promise<SlateRecommend1 | null> {
    const result = await this.service.slateRecommend1(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SlateRecommend1)
  async createSlateRecommend1(
    @graphql.Args() args: CreateSlateRecommend1Args
  ): Promise<SlateRecommend1> {
    return await this.service.createSlateRecommend1({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SlateRecommend1)
  async updateSlateRecommend1(
    @graphql.Args() args: UpdateSlateRecommend1Args
  ): Promise<SlateRecommend1 | null> {
    try {
      return await this.service.updateSlateRecommend1({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SlateRecommend1)
  async deleteSlateRecommend1(
    @graphql.Args() args: DeleteSlateRecommend1Args
  ): Promise<SlateRecommend1 | null> {
    try {
      return await this.service.deleteSlateRecommend1(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
