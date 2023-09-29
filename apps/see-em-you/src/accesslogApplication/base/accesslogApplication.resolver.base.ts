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
import { CreateAccesslogApplicationArgs } from "./CreateAccesslogApplicationArgs";
import { UpdateAccesslogApplicationArgs } from "./UpdateAccesslogApplicationArgs";
import { DeleteAccesslogApplicationArgs } from "./DeleteAccesslogApplicationArgs";
import { AccesslogApplicationCountArgs } from "./AccesslogApplicationCountArgs";
import { AccesslogApplicationFindManyArgs } from "./AccesslogApplicationFindManyArgs";
import { AccesslogApplicationFindUniqueArgs } from "./AccesslogApplicationFindUniqueArgs";
import { AccesslogApplication } from "./AccesslogApplication";
import { AccesslogApplicationService } from "../accesslogApplication.service";
@graphql.Resolver(() => AccesslogApplication)
export class AccesslogApplicationResolverBase {
  constructor(protected readonly service: AccesslogApplicationService) {}

  async _accesslogApplicationsMeta(
    @graphql.Args() args: AccesslogApplicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AccesslogApplication])
  async accesslogApplications(
    @graphql.Args() args: AccesslogApplicationFindManyArgs
  ): Promise<AccesslogApplication[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AccesslogApplication, { nullable: true })
  async accesslogApplication(
    @graphql.Args() args: AccesslogApplicationFindUniqueArgs
  ): Promise<AccesslogApplication | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AccesslogApplication)
  async createAccesslogApplication(
    @graphql.Args() args: CreateAccesslogApplicationArgs
  ): Promise<AccesslogApplication> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AccesslogApplication)
  async updateAccesslogApplication(
    @graphql.Args() args: UpdateAccesslogApplicationArgs
  ): Promise<AccesslogApplication | null> {
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

  @graphql.Mutation(() => AccesslogApplication)
  async deleteAccesslogApplication(
    @graphql.Args() args: DeleteAccesslogApplicationArgs
  ): Promise<AccesslogApplication | null> {
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
