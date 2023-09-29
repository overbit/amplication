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
import { CreateRecommendArgs } from "./CreateRecommendArgs";
import { UpdateRecommendArgs } from "./UpdateRecommendArgs";
import { DeleteRecommendArgs } from "./DeleteRecommendArgs";
import { RecommendCountArgs } from "./RecommendCountArgs";
import { RecommendFindManyArgs } from "./RecommendFindManyArgs";
import { RecommendFindUniqueArgs } from "./RecommendFindUniqueArgs";
import { Recommend } from "./Recommend";
import { Application } from "../../application/base/Application";
import { RecommendService } from "../recommend.service";
@graphql.Resolver(() => Recommend)
export class RecommendResolverBase {
  constructor(protected readonly service: RecommendService) {}

  async _recommendsMeta(
    @graphql.Args() args: RecommendCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Recommend])
  async recommends(
    @graphql.Args() args: RecommendFindManyArgs
  ): Promise<Recommend[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Recommend, { nullable: true })
  async recommend(
    @graphql.Args() args: RecommendFindUniqueArgs
  ): Promise<Recommend | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Recommend)
  async createRecommend(
    @graphql.Args() args: CreateRecommendArgs
  ): Promise<Recommend> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        application: {
          connect: args.data.application,
        },
      },
    });
  }

  @graphql.Mutation(() => Recommend)
  async updateRecommend(
    @graphql.Args() args: UpdateRecommendArgs
  ): Promise<Recommend | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          application: {
            connect: args.data.application,
          },
        },
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

  @graphql.Mutation(() => Recommend)
  async deleteRecommend(
    @graphql.Args() args: DeleteRecommendArgs
  ): Promise<Recommend | null> {
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

  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  async resolveFieldApplication(
    @graphql.Parent() parent: Recommend
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
