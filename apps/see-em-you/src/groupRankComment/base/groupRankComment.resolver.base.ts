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
import { GroupRankComment } from "./GroupRankComment";
import { GroupRankCommentCountArgs } from "./GroupRankCommentCountArgs";
import { GroupRankCommentFindManyArgs } from "./GroupRankCommentFindManyArgs";
import { GroupRankCommentFindUniqueArgs } from "./GroupRankCommentFindUniqueArgs";
import { CreateGroupRankCommentArgs } from "./CreateGroupRankCommentArgs";
import { UpdateGroupRankCommentArgs } from "./UpdateGroupRankCommentArgs";
import { DeleteGroupRankCommentArgs } from "./DeleteGroupRankCommentArgs";
import { GroupRankCommentService } from "../groupRankComment.service";
@graphql.Resolver(() => GroupRankComment)
export class GroupRankCommentResolverBase {
  constructor(protected readonly service: GroupRankCommentService) {}

  async _groupRankCommentsMeta(
    @graphql.Args() args: GroupRankCommentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GroupRankComment])
  async groupRankComments(
    @graphql.Args() args: GroupRankCommentFindManyArgs
  ): Promise<GroupRankComment[]> {
    return this.service.groupRankComments(args);
  }

  @graphql.Query(() => GroupRankComment, { nullable: true })
  async groupRankComment(
    @graphql.Args() args: GroupRankCommentFindUniqueArgs
  ): Promise<GroupRankComment | null> {
    const result = await this.service.groupRankComment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GroupRankComment)
  async createGroupRankComment(
    @graphql.Args() args: CreateGroupRankCommentArgs
  ): Promise<GroupRankComment> {
    return await this.service.createGroupRankComment({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => GroupRankComment)
  async updateGroupRankComment(
    @graphql.Args() args: UpdateGroupRankCommentArgs
  ): Promise<GroupRankComment | null> {
    try {
      return await this.service.updateGroupRankComment({
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

  @graphql.Mutation(() => GroupRankComment)
  async deleteGroupRankComment(
    @graphql.Args() args: DeleteGroupRankCommentArgs
  ): Promise<GroupRankComment | null> {
    try {
      return await this.service.deleteGroupRankComment(args);
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
