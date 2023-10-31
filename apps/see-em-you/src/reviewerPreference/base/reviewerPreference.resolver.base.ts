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
import { CreateReviewerPreferenceArgs } from "./CreateReviewerPreferenceArgs";
import { UpdateReviewerPreferenceArgs } from "./UpdateReviewerPreferenceArgs";
import { DeleteReviewerPreferenceArgs } from "./DeleteReviewerPreferenceArgs";
import { ReviewerPreferenceCountArgs } from "./ReviewerPreferenceCountArgs";
import { ReviewerPreferenceFindManyArgs } from "./ReviewerPreferenceFindManyArgs";
import { ReviewerPreferenceFindUniqueArgs } from "./ReviewerPreferenceFindUniqueArgs";
import { ReviewerPreference } from "./ReviewerPreference";
import { ReviewerPreferenceService } from "../reviewerPreference.service";
@graphql.Resolver(() => ReviewerPreference)
export class ReviewerPreferenceResolverBase {
  constructor(protected readonly service: ReviewerPreferenceService) {}

  async _reviewerPreferencesMeta(
    @graphql.Args() args: ReviewerPreferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ReviewerPreference])
  async reviewerPreferences(
    @graphql.Args() args: ReviewerPreferenceFindManyArgs
  ): Promise<ReviewerPreference[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ReviewerPreference, { nullable: true })
  async reviewerPreference(
    @graphql.Args() args: ReviewerPreferenceFindUniqueArgs
  ): Promise<ReviewerPreference | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReviewerPreference)
  async createReviewerPreference(
    @graphql.Args() args: CreateReviewerPreferenceArgs
  ): Promise<ReviewerPreference> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ReviewerPreference)
  async updateReviewerPreference(
    @graphql.Args() args: UpdateReviewerPreferenceArgs
  ): Promise<ReviewerPreference | null> {
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

  @graphql.Mutation(() => ReviewerPreference)
  async deleteReviewerPreference(
    @graphql.Args() args: DeleteReviewerPreferenceArgs
  ): Promise<ReviewerPreference | null> {
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
