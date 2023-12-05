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
import { DecisionRankMember } from "./DecisionRankMember";
import { DecisionRankMemberCountArgs } from "./DecisionRankMemberCountArgs";
import { DecisionRankMemberFindManyArgs } from "./DecisionRankMemberFindManyArgs";
import { DecisionRankMemberFindUniqueArgs } from "./DecisionRankMemberFindUniqueArgs";
import { CreateDecisionRankMemberArgs } from "./CreateDecisionRankMemberArgs";
import { UpdateDecisionRankMemberArgs } from "./UpdateDecisionRankMemberArgs";
import { DeleteDecisionRankMemberArgs } from "./DeleteDecisionRankMemberArgs";
import { DecisionRankMemberService } from "../decisionRankMember.service";
@graphql.Resolver(() => DecisionRankMember)
export class DecisionRankMemberResolverBase {
  constructor(protected readonly service: DecisionRankMemberService) {}

  async _decisionRankMembersMeta(
    @graphql.Args() args: DecisionRankMemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DecisionRankMember])
  async decisionRankMembers(
    @graphql.Args() args: DecisionRankMemberFindManyArgs
  ): Promise<DecisionRankMember[]> {
    return this.service.decisionRankMembers(args);
  }

  @graphql.Query(() => DecisionRankMember, { nullable: true })
  async decisionRankMember(
    @graphql.Args() args: DecisionRankMemberFindUniqueArgs
  ): Promise<DecisionRankMember | null> {
    const result = await this.service.decisionRankMember(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DecisionRankMember)
  async createDecisionRankMember(
    @graphql.Args() args: CreateDecisionRankMemberArgs
  ): Promise<DecisionRankMember> {
    return await this.service.createDecisionRankMember({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DecisionRankMember)
  async updateDecisionRankMember(
    @graphql.Args() args: UpdateDecisionRankMemberArgs
  ): Promise<DecisionRankMember | null> {
    try {
      return await this.service.updateDecisionRankMember({
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

  @graphql.Mutation(() => DecisionRankMember)
  async deleteDecisionRankMember(
    @graphql.Args() args: DeleteDecisionRankMemberArgs
  ): Promise<DecisionRankMember | null> {
    try {
      return await this.service.deleteDecisionRankMember(args);
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
