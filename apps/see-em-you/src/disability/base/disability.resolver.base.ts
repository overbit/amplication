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
import { CreateDisabilityArgs } from "./CreateDisabilityArgs";
import { UpdateDisabilityArgs } from "./UpdateDisabilityArgs";
import { DeleteDisabilityArgs } from "./DeleteDisabilityArgs";
import { DisabilityCountArgs } from "./DisabilityCountArgs";
import { DisabilityFindManyArgs } from "./DisabilityFindManyArgs";
import { DisabilityFindUniqueArgs } from "./DisabilityFindUniqueArgs";
import { Disability } from "./Disability";
import { DisabilityService } from "../disability.service";
@graphql.Resolver(() => Disability)
export class DisabilityResolverBase {
  constructor(protected readonly service: DisabilityService) {}

  async _disabilitiesMeta(
    @graphql.Args() args: DisabilityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Disability])
  async disabilities(
    @graphql.Args() args: DisabilityFindManyArgs
  ): Promise<Disability[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Disability, { nullable: true })
  async disability(
    @graphql.Args() args: DisabilityFindUniqueArgs
  ): Promise<Disability | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Disability)
  async createDisability(
    @graphql.Args() args: CreateDisabilityArgs
  ): Promise<Disability> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Disability)
  async updateDisability(
    @graphql.Args() args: UpdateDisabilityArgs
  ): Promise<Disability | null> {
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

  @graphql.Mutation(() => Disability)
  async deleteDisability(
    @graphql.Args() args: DeleteDisabilityArgs
  ): Promise<Disability | null> {
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
