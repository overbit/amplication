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
import { CreateMitsSlateAppsMseReviewedArgs } from "./CreateMitsSlateAppsMseReviewedArgs";
import { UpdateMitsSlateAppsMseReviewedArgs } from "./UpdateMitsSlateAppsMseReviewedArgs";
import { DeleteMitsSlateAppsMseReviewedArgs } from "./DeleteMitsSlateAppsMseReviewedArgs";
import { MitsSlateAppsMseReviewedCountArgs } from "./MitsSlateAppsMseReviewedCountArgs";
import { MitsSlateAppsMseReviewedFindManyArgs } from "./MitsSlateAppsMseReviewedFindManyArgs";
import { MitsSlateAppsMseReviewedFindUniqueArgs } from "./MitsSlateAppsMseReviewedFindUniqueArgs";
import { MitsSlateAppsMseReviewed } from "./MitsSlateAppsMseReviewed";
import { MitsSlateAppsMseReviewedService } from "../mitsSlateAppsMseReviewed.service";
@graphql.Resolver(() => MitsSlateAppsMseReviewed)
export class MitsSlateAppsMseReviewedResolverBase {
  constructor(protected readonly service: MitsSlateAppsMseReviewedService) {}

  async _mitsSlateAppsMseReviewedsMeta(
    @graphql.Args() args: MitsSlateAppsMseReviewedCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MitsSlateAppsMseReviewed])
  async mitsSlateAppsMseRevieweds(
    @graphql.Args() args: MitsSlateAppsMseReviewedFindManyArgs
  ): Promise<MitsSlateAppsMseReviewed[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MitsSlateAppsMseReviewed, { nullable: true })
  async mitsSlateAppsMseReviewed(
    @graphql.Args() args: MitsSlateAppsMseReviewedFindUniqueArgs
  ): Promise<MitsSlateAppsMseReviewed | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MitsSlateAppsMseReviewed)
  async createMitsSlateAppsMseReviewed(
    @graphql.Args() args: CreateMitsSlateAppsMseReviewedArgs
  ): Promise<MitsSlateAppsMseReviewed> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MitsSlateAppsMseReviewed)
  async updateMitsSlateAppsMseReviewed(
    @graphql.Args() args: UpdateMitsSlateAppsMseReviewedArgs
  ): Promise<MitsSlateAppsMseReviewed | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => MitsSlateAppsMseReviewed)
  async deleteMitsSlateAppsMseReviewed(
    @graphql.Args() args: DeleteMitsSlateAppsMseReviewedArgs
  ): Promise<MitsSlateAppsMseReviewed | null> {
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
}
