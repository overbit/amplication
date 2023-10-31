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
import { CreateLuUsersUsertypeArgs } from "./CreateLuUsersUsertypeArgs";
import { UpdateLuUsersUsertypeArgs } from "./UpdateLuUsersUsertypeArgs";
import { DeleteLuUsersUsertypeArgs } from "./DeleteLuUsersUsertypeArgs";
import { LuUsersUsertypeCountArgs } from "./LuUsersUsertypeCountArgs";
import { LuUsersUsertypeFindManyArgs } from "./LuUsersUsertypeFindManyArgs";
import { LuUsersUsertypeFindUniqueArgs } from "./LuUsersUsertypeFindUniqueArgs";
import { LuUsersUsertype } from "./LuUsersUsertype";
import { MhciPrereqsConversationCommentFindManyArgs } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationCommentFindManyArgs";
import { MhciPrereqsConversationComment } from "../../mhciPrereqsConversationComment/base/MhciPrereqsConversationComment";
import { MhciPrereqsCourseFindManyArgs } from "../../mhciPrereqsCourse/base/MhciPrereqsCourseFindManyArgs";
import { MhciPrereqsCourse } from "../../mhciPrereqsCourse/base/MhciPrereqsCourse";
import { MhciPrereqsDesignPortfolioFindManyArgs } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolioFindManyArgs";
import { MhciPrereqsDesignPortfolio } from "../../mhciPrereqsDesignPortfolio/base/MhciPrereqsDesignPortfolio";
import { MhciPrereqsProgrammingTestFindManyArgs } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTestFindManyArgs";
import { MhciPrereqsProgrammingTest } from "../../mhciPrereqsProgrammingTest/base/MhciPrereqsProgrammingTest";
import { MhciPrereqsProgrammingSample } from "../../mhciPrereqsProgrammingSample/base/MhciPrereqsProgrammingSample";
import { User } from "../../user/base/User";
import { LuUsersUsertypeService } from "../luUsersUsertype.service";
@graphql.Resolver(() => LuUsersUsertype)
export class LuUsersUsertypeResolverBase {
  constructor(protected readonly service: LuUsersUsertypeService) {}

  async _luUsersUsertypesMeta(
    @graphql.Args() args: LuUsersUsertypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LuUsersUsertype])
  async luUsersUsertypes(
    @graphql.Args() args: LuUsersUsertypeFindManyArgs
  ): Promise<LuUsersUsertype[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => LuUsersUsertype, { nullable: true })
  async luUsersUsertype(
    @graphql.Args() args: LuUsersUsertypeFindUniqueArgs
  ): Promise<LuUsersUsertype | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LuUsersUsertype)
  async createLuUsersUsertype(
    @graphql.Args() args: CreateLuUsersUsertypeArgs
  ): Promise<LuUsersUsertype> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        mhciPrereqsProgrammingSamples: args.data.mhciPrereqsProgrammingSamples
          ? {
              connect: args.data.mhciPrereqsProgrammingSamples,
            }
          : undefined,

        users: {
          connect: args.data.users,
        },
      },
    });
  }

  @graphql.Mutation(() => LuUsersUsertype)
  async updateLuUsersUsertype(
    @graphql.Args() args: UpdateLuUsersUsertypeArgs
  ): Promise<LuUsersUsertype | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          mhciPrereqsProgrammingSamples: args.data.mhciPrereqsProgrammingSamples
            ? {
                connect: args.data.mhciPrereqsProgrammingSamples,
              }
            : undefined,

          users: {
            connect: args.data.users,
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

  @graphql.Mutation(() => LuUsersUsertype)
  async deleteLuUsersUsertype(
    @graphql.Args() args: DeleteLuUsersUsertypeArgs
  ): Promise<LuUsersUsertype | null> {
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

  @graphql.ResolveField(() => [MhciPrereqsConversationComment], {
    name: "mhciPrereqsConversationComments",
  })
  async resolveFieldMhciPrereqsConversationComments(
    @graphql.Parent() parent: LuUsersUsertype,
    @graphql.Args() args: MhciPrereqsConversationCommentFindManyArgs
  ): Promise<MhciPrereqsConversationComment[]> {
    const results = await this.service.findMhciPrereqsConversationComments(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MhciPrereqsCourse], {
    name: "mhciPrereqsCourses",
  })
  async resolveFieldMhciPrereqsCourses(
    @graphql.Parent() parent: LuUsersUsertype,
    @graphql.Args() args: MhciPrereqsCourseFindManyArgs
  ): Promise<MhciPrereqsCourse[]> {
    const results = await this.service.findMhciPrereqsCourses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MhciPrereqsDesignPortfolio], {
    name: "mhciPrereqsDesignPortfolios",
  })
  async resolveFieldMhciPrereqsDesignPortfolios(
    @graphql.Parent() parent: LuUsersUsertype,
    @graphql.Args() args: MhciPrereqsDesignPortfolioFindManyArgs
  ): Promise<MhciPrereqsDesignPortfolio[]> {
    const results = await this.service.findMhciPrereqsDesignPortfolios(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [MhciPrereqsProgrammingTest], {
    name: "mhciPrereqsProgrammingTests",
  })
  async resolveFieldMhciPrereqsProgrammingTests(
    @graphql.Parent() parent: LuUsersUsertype,
    @graphql.Args() args: MhciPrereqsProgrammingTestFindManyArgs
  ): Promise<MhciPrereqsProgrammingTest[]> {
    const results = await this.service.findMhciPrereqsProgrammingTests(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => MhciPrereqsProgrammingSample, {
    nullable: true,
    name: "mhciPrereqsProgrammingSamples",
  })
  async resolveFieldMhciPrereqsProgrammingSamples(
    @graphql.Parent() parent: LuUsersUsertype
  ): Promise<MhciPrereqsProgrammingSample | null> {
    const result = await this.service.getMhciPrereqsProgrammingSamples(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "users",
  })
  async resolveFieldUsers(
    @graphql.Parent() parent: LuUsersUsertype
  ): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
