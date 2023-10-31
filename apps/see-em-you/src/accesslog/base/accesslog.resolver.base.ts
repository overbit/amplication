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
import { CreateAccesslogArgs } from "./CreateAccesslogArgs";
import { UpdateAccesslogArgs } from "./UpdateAccesslogArgs";
import { DeleteAccesslogArgs } from "./DeleteAccesslogArgs";
import { AccesslogCountArgs } from "./AccesslogCountArgs";
import { AccesslogFindManyArgs } from "./AccesslogFindManyArgs";
import { AccesslogFindUniqueArgs } from "./AccesslogFindUniqueArgs";
import { Accesslog } from "./Accesslog";
import { AccesslogService } from "../accesslog.service";
@graphql.Resolver(() => Accesslog)
export class AccesslogResolverBase {
  constructor(protected readonly service: AccesslogService) {}

  async _accesslogsMeta(
    @graphql.Args() args: AccesslogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Accesslog])
  async accesslogs(
    @graphql.Args() args: AccesslogFindManyArgs
  ): Promise<Accesslog[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Accesslog, { nullable: true })
  async accesslog(
    @graphql.Args() args: AccesslogFindUniqueArgs
  ): Promise<Accesslog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Accesslog)
  async createAccesslog(
    @graphql.Args() args: CreateAccesslogArgs
  ): Promise<Accesslog> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Accesslog)
  async updateAccesslog(
    @graphql.Args() args: UpdateAccesslogArgs
  ): Promise<Accesslog | null> {
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

  @graphql.Mutation(() => Accesslog)
  async deleteAccesslog(
    @graphql.Args() args: DeleteAccesslogArgs
  ): Promise<Accesslog | null> {
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
