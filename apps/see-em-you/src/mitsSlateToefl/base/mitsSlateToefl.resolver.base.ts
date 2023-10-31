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
import { CreateMitsSlateToeflArgs } from "./CreateMitsSlateToeflArgs";
import { UpdateMitsSlateToeflArgs } from "./UpdateMitsSlateToeflArgs";
import { DeleteMitsSlateToeflArgs } from "./DeleteMitsSlateToeflArgs";
import { MitsSlateToeflCountArgs } from "./MitsSlateToeflCountArgs";
import { MitsSlateToeflFindManyArgs } from "./MitsSlateToeflFindManyArgs";
import { MitsSlateToeflFindUniqueArgs } from "./MitsSlateToeflFindUniqueArgs";
import { MitsSlateToefl } from "./MitsSlateToefl";
import { MitsSlateToeflService } from "../mitsSlateToefl.service";
@graphql.Resolver(() => MitsSlateToefl)
export class MitsSlateToeflResolverBase {
  constructor(protected readonly service: MitsSlateToeflService) {}

  async _mitsSlateToeflsMeta(
    @graphql.Args() args: MitsSlateToeflCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MitsSlateToefl])
  async mitsSlateToefls(
    @graphql.Args() args: MitsSlateToeflFindManyArgs
  ): Promise<MitsSlateToefl[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MitsSlateToefl, { nullable: true })
  async mitsSlateToefl(
    @graphql.Args() args: MitsSlateToeflFindUniqueArgs
  ): Promise<MitsSlateToefl | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MitsSlateToefl)
  async createMitsSlateToefl(
    @graphql.Args() args: CreateMitsSlateToeflArgs
  ): Promise<MitsSlateToefl> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MitsSlateToefl)
  async updateMitsSlateToefl(
    @graphql.Args() args: UpdateMitsSlateToeflArgs
  ): Promise<MitsSlateToefl | null> {
    try {
      return await this.service.update({
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

  @graphql.Mutation(() => MitsSlateToefl)
  async deleteMitsSlateToefl(
    @graphql.Args() args: DeleteMitsSlateToeflArgs
  ): Promise<MitsSlateToefl | null> {
    try {
      return await this.service.delete(args);
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
