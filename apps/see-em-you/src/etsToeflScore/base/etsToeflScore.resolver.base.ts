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
import { EtsToeflScore } from "./EtsToeflScore";
import { EtsToeflScoreCountArgs } from "./EtsToeflScoreCountArgs";
import { EtsToeflScoreFindManyArgs } from "./EtsToeflScoreFindManyArgs";
import { EtsToeflScoreFindUniqueArgs } from "./EtsToeflScoreFindUniqueArgs";
import { CreateEtsToeflScoreArgs } from "./CreateEtsToeflScoreArgs";
import { UpdateEtsToeflScoreArgs } from "./UpdateEtsToeflScoreArgs";
import { DeleteEtsToeflScoreArgs } from "./DeleteEtsToeflScoreArgs";
import { EtsToeflScoreService } from "../etsToeflScore.service";
@graphql.Resolver(() => EtsToeflScore)
export class EtsToeflScoreResolverBase {
  constructor(protected readonly service: EtsToeflScoreService) {}

  async _etsToeflScoresMeta(
    @graphql.Args() args: EtsToeflScoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EtsToeflScore])
  async etsToeflScores(
    @graphql.Args() args: EtsToeflScoreFindManyArgs
  ): Promise<EtsToeflScore[]> {
    return this.service.etsToeflScores(args);
  }

  @graphql.Query(() => EtsToeflScore, { nullable: true })
  async etsToeflScore(
    @graphql.Args() args: EtsToeflScoreFindUniqueArgs
  ): Promise<EtsToeflScore | null> {
    const result = await this.service.etsToeflScore(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EtsToeflScore)
  async createEtsToeflScore(
    @graphql.Args() args: CreateEtsToeflScoreArgs
  ): Promise<EtsToeflScore> {
    return await this.service.createEtsToeflScore({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EtsToeflScore)
  async updateEtsToeflScore(
    @graphql.Args() args: UpdateEtsToeflScoreArgs
  ): Promise<EtsToeflScore | null> {
    try {
      return await this.service.updateEtsToeflScore({
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

  @graphql.Mutation(() => EtsToeflScore)
  async deleteEtsToeflScore(
    @graphql.Args() args: DeleteEtsToeflScoreArgs
  ): Promise<EtsToeflScore | null> {
    try {
      return await this.service.deleteEtsToeflScore(args);
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
