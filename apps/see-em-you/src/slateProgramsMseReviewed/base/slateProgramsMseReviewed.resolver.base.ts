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
import { CreateSlateProgramsMseReviewedArgs } from "./CreateSlateProgramsMseReviewedArgs";
import { UpdateSlateProgramsMseReviewedArgs } from "./UpdateSlateProgramsMseReviewedArgs";
import { DeleteSlateProgramsMseReviewedArgs } from "./DeleteSlateProgramsMseReviewedArgs";
import { SlateProgramsMseReviewedCountArgs } from "./SlateProgramsMseReviewedCountArgs";
import { SlateProgramsMseReviewedFindManyArgs } from "./SlateProgramsMseReviewedFindManyArgs";
import { SlateProgramsMseReviewedFindUniqueArgs } from "./SlateProgramsMseReviewedFindUniqueArgs";
import { SlateProgramsMseReviewed } from "./SlateProgramsMseReviewed";
import { SlateProgramsMseReviewedService } from "../slateProgramsMseReviewed.service";
@graphql.Resolver(() => SlateProgramsMseReviewed)
export class SlateProgramsMseReviewedResolverBase {
  constructor(protected readonly service: SlateProgramsMseReviewedService) {}

  async _slateProgramsMseReviewedsMeta(
    @graphql.Args() args: SlateProgramsMseReviewedCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SlateProgramsMseReviewed])
  async slateProgramsMseRevieweds(
    @graphql.Args() args: SlateProgramsMseReviewedFindManyArgs
  ): Promise<SlateProgramsMseReviewed[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => SlateProgramsMseReviewed, { nullable: true })
  async slateProgramsMseReviewed(
    @graphql.Args() args: SlateProgramsMseReviewedFindUniqueArgs
  ): Promise<SlateProgramsMseReviewed | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SlateProgramsMseReviewed)
  async createSlateProgramsMseReviewed(
    @graphql.Args() args: CreateSlateProgramsMseReviewedArgs
  ): Promise<SlateProgramsMseReviewed> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SlateProgramsMseReviewed)
  async updateSlateProgramsMseReviewed(
    @graphql.Args() args: UpdateSlateProgramsMseReviewedArgs
  ): Promise<SlateProgramsMseReviewed | null> {
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

  @graphql.Mutation(() => SlateProgramsMseReviewed)
  async deleteSlateProgramsMseReviewed(
    @graphql.Args() args: DeleteSlateProgramsMseReviewedArgs
  ): Promise<SlateProgramsMseReviewed | null> {
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
