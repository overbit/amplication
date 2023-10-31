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
import { CreatePromotionHistoryArgs } from "./CreatePromotionHistoryArgs";
import { UpdatePromotionHistoryArgs } from "./UpdatePromotionHistoryArgs";
import { DeletePromotionHistoryArgs } from "./DeletePromotionHistoryArgs";
import { PromotionHistoryCountArgs } from "./PromotionHistoryCountArgs";
import { PromotionHistoryFindManyArgs } from "./PromotionHistoryFindManyArgs";
import { PromotionHistoryFindUniqueArgs } from "./PromotionHistoryFindUniqueArgs";
import { PromotionHistory } from "./PromotionHistory";
import { Application } from "../../application/base/Application";
import { PromotionHistoryService } from "../promotionHistory.service";
@graphql.Resolver(() => PromotionHistory)
export class PromotionHistoryResolverBase {
  constructor(protected readonly service: PromotionHistoryService) {}

  async _promotionHistoriesMeta(
    @graphql.Args() args: PromotionHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PromotionHistory])
  async promotionHistories(
    @graphql.Args() args: PromotionHistoryFindManyArgs
  ): Promise<PromotionHistory[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => PromotionHistory, { nullable: true })
  async promotionHistory(
    @graphql.Args() args: PromotionHistoryFindUniqueArgs
  ): Promise<PromotionHistory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PromotionHistory)
  async createPromotionHistory(
    @graphql.Args() args: CreatePromotionHistoryArgs
  ): Promise<PromotionHistory> {
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

  @graphql.Mutation(() => PromotionHistory)
  async updatePromotionHistory(
    @graphql.Args() args: UpdatePromotionHistoryArgs
  ): Promise<PromotionHistory | null> {
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
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PromotionHistory)
  async deletePromotionHistory(
    @graphql.Args() args: DeletePromotionHistoryArgs
  ): Promise<PromotionHistory | null> {
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

  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  async resolveFieldApplication(
    @graphql.Parent() parent: PromotionHistory
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
