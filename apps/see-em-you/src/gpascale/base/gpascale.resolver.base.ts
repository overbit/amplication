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
import { CreateGpascaleArgs } from "./CreateGpascaleArgs";
import { UpdateGpascaleArgs } from "./UpdateGpascaleArgs";
import { DeleteGpascaleArgs } from "./DeleteGpascaleArgs";
import { GpascaleCountArgs } from "./GpascaleCountArgs";
import { GpascaleFindManyArgs } from "./GpascaleFindManyArgs";
import { GpascaleFindUniqueArgs } from "./GpascaleFindUniqueArgs";
import { Gpascale } from "./Gpascale";
import { GpascaleService } from "../gpascale.service";
@graphql.Resolver(() => Gpascale)
export class GpascaleResolverBase {
  constructor(protected readonly service: GpascaleService) {}

  async _gpascalesMeta(
    @graphql.Args() args: GpascaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Gpascale])
  async gpascales(
    @graphql.Args() args: GpascaleFindManyArgs
  ): Promise<Gpascale[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Gpascale, { nullable: true })
  async gpascale(
    @graphql.Args() args: GpascaleFindUniqueArgs
  ): Promise<Gpascale | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Gpascale)
  async createGpascale(
    @graphql.Args() args: CreateGpascaleArgs
  ): Promise<Gpascale> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Gpascale)
  async updateGpascale(
    @graphql.Args() args: UpdateGpascaleArgs
  ): Promise<Gpascale | null> {
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

  @graphql.Mutation(() => Gpascale)
  async deleteGpascale(
    @graphql.Args() args: DeleteGpascaleArgs
  ): Promise<Gpascale | null> {
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
