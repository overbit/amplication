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
import { CreateSlateTestScoreArgs } from "./CreateSlateTestScoreArgs";
import { UpdateSlateTestScoreArgs } from "./UpdateSlateTestScoreArgs";
import { DeleteSlateTestScoreArgs } from "./DeleteSlateTestScoreArgs";
import { SlateTestScoreCountArgs } from "./SlateTestScoreCountArgs";
import { SlateTestScoreFindManyArgs } from "./SlateTestScoreFindManyArgs";
import { SlateTestScoreFindUniqueArgs } from "./SlateTestScoreFindUniqueArgs";
import { SlateTestScore } from "./SlateTestScore";
import { SlateTestScoreService } from "../slateTestScore.service";
@graphql.Resolver(() => SlateTestScore)
export class SlateTestScoreResolverBase {
  constructor(protected readonly service: SlateTestScoreService) {}

  async _slateTestScoresMeta(
    @graphql.Args() args: SlateTestScoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SlateTestScore])
  async slateTestScores(
    @graphql.Args() args: SlateTestScoreFindManyArgs
  ): Promise<SlateTestScore[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => SlateTestScore, { nullable: true })
  async slateTestScore(
    @graphql.Args() args: SlateTestScoreFindUniqueArgs
  ): Promise<SlateTestScore | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SlateTestScore)
  async createSlateTestScore(
    @graphql.Args() args: CreateSlateTestScoreArgs
  ): Promise<SlateTestScore> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SlateTestScore)
  async updateSlateTestScore(
    @graphql.Args() args: UpdateSlateTestScoreArgs
  ): Promise<SlateTestScore | null> {
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

  @graphql.Mutation(() => SlateTestScore)
  async deleteSlateTestScore(
    @graphql.Args() args: DeleteSlateTestScoreArgs
  ): Promise<SlateTestScore | null> {
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
