/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateMitsSlateRecommend3Args } from "./CreateMitsSlateRecommend3Args";
import { UpdateMitsSlateRecommend3Args } from "./UpdateMitsSlateRecommend3Args";
import { DeleteMitsSlateRecommend3Args } from "./DeleteMitsSlateRecommend3Args";
import { MitsSlateRecommend3CountArgs } from "./MitsSlateRecommend3CountArgs";
import { MitsSlateRecommend3FindManyArgs } from "./MitsSlateRecommend3FindManyArgs";
import { MitsSlateRecommend3FindUniqueArgs } from "./MitsSlateRecommend3FindUniqueArgs";
import { MitsSlateRecommend3 } from "./MitsSlateRecommend3";
import { MitsSlateRecommend3Service } from "../mitsSlateRecommend3.service";
@graphql.Resolver(() => MitsSlateRecommend3)
export class MitsSlateRecommend3ResolverBase {
  constructor(protected readonly service: MitsSlateRecommend3Service) {}

  async _mitsSlateRecommend3sMeta(
    @graphql.Args() args: MitsSlateRecommend3CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MitsSlateRecommend3])
  async mitsSlateRecommend3s(
    @graphql.Args() args: MitsSlateRecommend3FindManyArgs
  ): Promise<MitsSlateRecommend3[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MitsSlateRecommend3, { nullable: true })
  async mitsSlateRecommend3(
    @graphql.Args() args: MitsSlateRecommend3FindUniqueArgs
  ): Promise<MitsSlateRecommend3 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MitsSlateRecommend3)
  async createMitsSlateRecommend3(
    @graphql.Args() args: CreateMitsSlateRecommend3Args
  ): Promise<MitsSlateRecommend3> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MitsSlateRecommend3)
  async updateMitsSlateRecommend3(
    @graphql.Args() args: UpdateMitsSlateRecommend3Args
  ): Promise<MitsSlateRecommend3 | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MitsSlateRecommend3)
  async deleteMitsSlateRecommend3(
    @graphql.Args() args: DeleteMitsSlateRecommend3Args
  ): Promise<MitsSlateRecommend3 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
