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
import { CreateMergeApplicationArgs } from "./CreateMergeApplicationArgs";
import { UpdateMergeApplicationArgs } from "./UpdateMergeApplicationArgs";
import { DeleteMergeApplicationArgs } from "./DeleteMergeApplicationArgs";
import { MergeApplicationCountArgs } from "./MergeApplicationCountArgs";
import { MergeApplicationFindManyArgs } from "./MergeApplicationFindManyArgs";
import { MergeApplicationFindUniqueArgs } from "./MergeApplicationFindUniqueArgs";
import { MergeApplication } from "./MergeApplication";
import { MergeApplicationService } from "../mergeApplication.service";
@graphql.Resolver(() => MergeApplication)
export class MergeApplicationResolverBase {
  constructor(protected readonly service: MergeApplicationService) {}

  async _mergeApplicationsMeta(
    @graphql.Args() args: MergeApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MergeApplication])
  async mergeApplications(
    @graphql.Args() args: MergeApplicationFindManyArgs
  ): Promise<MergeApplication[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MergeApplication, { nullable: true })
  async mergeApplication(
    @graphql.Args() args: MergeApplicationFindUniqueArgs
  ): Promise<MergeApplication | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MergeApplication)
  async createMergeApplication(
    @graphql.Args() args: CreateMergeApplicationArgs
  ): Promise<MergeApplication> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MergeApplication)
  async updateMergeApplication(
    @graphql.Args() args: UpdateMergeApplicationArgs
  ): Promise<MergeApplication | null> {
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

  @graphql.Mutation(() => MergeApplication)
  async deleteMergeApplication(
    @graphql.Args() args: DeleteMergeApplicationArgs
  ): Promise<MergeApplication | null> {
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
