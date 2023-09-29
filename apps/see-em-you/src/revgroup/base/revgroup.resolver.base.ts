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
import { CreateRevgroupArgs } from "./CreateRevgroupArgs";
import { UpdateRevgroupArgs } from "./UpdateRevgroupArgs";
import { DeleteRevgroupArgs } from "./DeleteRevgroupArgs";
import { RevgroupCountArgs } from "./RevgroupCountArgs";
import { RevgroupFindManyArgs } from "./RevgroupFindManyArgs";
import { RevgroupFindUniqueArgs } from "./RevgroupFindUniqueArgs";
import { Revgroup } from "./Revgroup";
import { RevgroupService } from "../revgroup.service";
@graphql.Resolver(() => Revgroup)
export class RevgroupResolverBase {
  constructor(protected readonly service: RevgroupService) {}

  async _revgroupsMeta(
    @graphql.Args() args: RevgroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Revgroup])
  async revgroups(
    @graphql.Args() args: RevgroupFindManyArgs
  ): Promise<Revgroup[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Revgroup, { nullable: true })
  async revgroup(
    @graphql.Args() args: RevgroupFindUniqueArgs
  ): Promise<Revgroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Revgroup)
  async createRevgroup(
    @graphql.Args() args: CreateRevgroupArgs
  ): Promise<Revgroup> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Revgroup)
  async updateRevgroup(
    @graphql.Args() args: UpdateRevgroupArgs
  ): Promise<Revgroup | null> {
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

  @graphql.Mutation(() => Revgroup)
  async deleteRevgroup(
    @graphql.Args() args: DeleteRevgroupArgs
  ): Promise<Revgroup | null> {
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
