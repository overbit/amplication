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
import { CreateMhciPrereqsConversationCommentArgs } from "./CreateMhciPrereqsConversationCommentArgs";
import { UpdateMhciPrereqsConversationCommentArgs } from "./UpdateMhciPrereqsConversationCommentArgs";
import { DeleteMhciPrereqsConversationCommentArgs } from "./DeleteMhciPrereqsConversationCommentArgs";
import { MhciPrereqsConversationCommentCountArgs } from "./MhciPrereqsConversationCommentCountArgs";
import { MhciPrereqsConversationCommentFindManyArgs } from "./MhciPrereqsConversationCommentFindManyArgs";
import { MhciPrereqsConversationCommentFindUniqueArgs } from "./MhciPrereqsConversationCommentFindUniqueArgs";
import { MhciPrereqsConversationComment } from "./MhciPrereqsConversationComment";
import { LuUsersUsertype } from "../../luUsersUsertype/base/LuUsersUsertype";
import { MhciPrereq } from "../../mhciPrereq/base/MhciPrereq";
import { MhciPrereqsConversationCommentService } from "../mhciPrereqsConversationComment.service";
@graphql.Resolver(() => MhciPrereqsConversationComment)
export class MhciPrereqsConversationCommentResolverBase {
  constructor(
    protected readonly service: MhciPrereqsConversationCommentService
  ) {}

  async _mhciPrereqsConversationCommentsMeta(
    @graphql.Args() args: MhciPrereqsConversationCommentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MhciPrereqsConversationComment])
  async mhciPrereqsConversationComments(
    @graphql.Args() args: MhciPrereqsConversationCommentFindManyArgs
  ): Promise<MhciPrereqsConversationComment[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MhciPrereqsConversationComment, { nullable: true })
  async mhciPrereqsConversationComment(
    @graphql.Args() args: MhciPrereqsConversationCommentFindUniqueArgs
  ): Promise<MhciPrereqsConversationComment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MhciPrereqsConversationComment)
  async createMhciPrereqsConversationComment(
    @graphql.Args() args: CreateMhciPrereqsConversationCommentArgs
  ): Promise<MhciPrereqsConversationComment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        luUsersUsertypes: {
          connect: args.data.luUsersUsertypes,
        },

        mhciPrereqs: {
          connect: args.data.mhciPrereqs,
        },
      },
    });
  }

  @graphql.Mutation(() => MhciPrereqsConversationComment)
  async updateMhciPrereqsConversationComment(
    @graphql.Args() args: UpdateMhciPrereqsConversationCommentArgs
  ): Promise<MhciPrereqsConversationComment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          luUsersUsertypes: {
            connect: args.data.luUsersUsertypes,
          },

          mhciPrereqs: {
            connect: args.data.mhciPrereqs,
          },
        },
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

  @graphql.Mutation(() => MhciPrereqsConversationComment)
  async deleteMhciPrereqsConversationComment(
    @graphql.Args() args: DeleteMhciPrereqsConversationCommentArgs
  ): Promise<MhciPrereqsConversationComment | null> {
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

  @graphql.ResolveField(() => LuUsersUsertype, {
    nullable: true,
    name: "luUsersUsertypes",
  })
  async resolveFieldLuUsersUsertypes(
    @graphql.Parent() parent: MhciPrereqsConversationComment
  ): Promise<LuUsersUsertype | null> {
    const result = await this.service.getLuUsersUsertypes(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => MhciPrereq, {
    nullable: true,
    name: "mhciPrereqs",
  })
  async resolveFieldMhciPrereqs(
    @graphql.Parent() parent: MhciPrereqsConversationComment
  ): Promise<MhciPrereq | null> {
    const result = await this.service.getMhciPrereqs(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
