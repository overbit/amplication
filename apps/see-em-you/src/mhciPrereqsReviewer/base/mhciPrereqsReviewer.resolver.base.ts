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
import { MhciPrereqsReviewer } from "./MhciPrereqsReviewer";
import { MhciPrereqsReviewerCountArgs } from "./MhciPrereqsReviewerCountArgs";
import { MhciPrereqsReviewerFindManyArgs } from "./MhciPrereqsReviewerFindManyArgs";
import { MhciPrereqsReviewerFindUniqueArgs } from "./MhciPrereqsReviewerFindUniqueArgs";
import { CreateMhciPrereqsReviewerArgs } from "./CreateMhciPrereqsReviewerArgs";
import { UpdateMhciPrereqsReviewerArgs } from "./UpdateMhciPrereqsReviewerArgs";
import { DeleteMhciPrereqsReviewerArgs } from "./DeleteMhciPrereqsReviewerArgs";
import { MhciPrereqsReviewerService } from "../mhciPrereqsReviewer.service";
@graphql.Resolver(() => MhciPrereqsReviewer)
export class MhciPrereqsReviewerResolverBase {
  constructor(protected readonly service: MhciPrereqsReviewerService) {}

  async _mhciPrereqsReviewersMeta(
    @graphql.Args() args: MhciPrereqsReviewerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MhciPrereqsReviewer])
  async mhciPrereqsReviewers(
    @graphql.Args() args: MhciPrereqsReviewerFindManyArgs
  ): Promise<MhciPrereqsReviewer[]> {
    return this.service.mhciPrereqsReviewers(args);
  }

  @graphql.Query(() => MhciPrereqsReviewer, { nullable: true })
  async mhciPrereqsReviewer(
    @graphql.Args() args: MhciPrereqsReviewerFindUniqueArgs
  ): Promise<MhciPrereqsReviewer | null> {
    const result = await this.service.mhciPrereqsReviewer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MhciPrereqsReviewer)
  async createMhciPrereqsReviewer(
    @graphql.Args() args: CreateMhciPrereqsReviewerArgs
  ): Promise<MhciPrereqsReviewer> {
    return await this.service.createMhciPrereqsReviewer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MhciPrereqsReviewer)
  async updateMhciPrereqsReviewer(
    @graphql.Args() args: UpdateMhciPrereqsReviewerArgs
  ): Promise<MhciPrereqsReviewer | null> {
    try {
      return await this.service.updateMhciPrereqsReviewer({
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

  @graphql.Mutation(() => MhciPrereqsReviewer)
  async deleteMhciPrereqsReviewer(
    @graphql.Args() args: DeleteMhciPrereqsReviewerArgs
  ): Promise<MhciPrereqsReviewer | null> {
    try {
      return await this.service.deleteMhciPrereqsReviewer(args);
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
