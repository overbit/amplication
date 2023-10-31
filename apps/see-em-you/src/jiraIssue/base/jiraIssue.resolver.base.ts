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
import { CreateJiraIssueArgs } from "./CreateJiraIssueArgs";
import { UpdateJiraIssueArgs } from "./UpdateJiraIssueArgs";
import { DeleteJiraIssueArgs } from "./DeleteJiraIssueArgs";
import { JiraIssueCountArgs } from "./JiraIssueCountArgs";
import { JiraIssueFindManyArgs } from "./JiraIssueFindManyArgs";
import { JiraIssueFindUniqueArgs } from "./JiraIssueFindUniqueArgs";
import { JiraIssue } from "./JiraIssue";
import { JiraIssueService } from "../jiraIssue.service";
@graphql.Resolver(() => JiraIssue)
export class JiraIssueResolverBase {
  constructor(protected readonly service: JiraIssueService) {}

  async _jiraIssuesMeta(
    @graphql.Args() args: JiraIssueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JiraIssue])
  async jiraIssues(
    @graphql.Args() args: JiraIssueFindManyArgs
  ): Promise<JiraIssue[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => JiraIssue, { nullable: true })
  async jiraIssue(
    @graphql.Args() args: JiraIssueFindUniqueArgs
  ): Promise<JiraIssue | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JiraIssue)
  async createJiraIssue(
    @graphql.Args() args: CreateJiraIssueArgs
  ): Promise<JiraIssue> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => JiraIssue)
  async updateJiraIssue(
    @graphql.Args() args: UpdateJiraIssueArgs
  ): Promise<JiraIssue | null> {
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

  @graphql.Mutation(() => JiraIssue)
  async deleteJiraIssue(
    @graphql.Args() args: DeleteJiraIssueArgs
  ): Promise<JiraIssue | null> {
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
