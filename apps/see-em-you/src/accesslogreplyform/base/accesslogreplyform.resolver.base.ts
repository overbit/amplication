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
import { Accesslogreplyform } from "./Accesslogreplyform";
import { AccesslogreplyformCountArgs } from "./AccesslogreplyformCountArgs";
import { AccesslogreplyformFindManyArgs } from "./AccesslogreplyformFindManyArgs";
import { AccesslogreplyformFindUniqueArgs } from "./AccesslogreplyformFindUniqueArgs";
import { CreateAccesslogreplyformArgs } from "./CreateAccesslogreplyformArgs";
import { UpdateAccesslogreplyformArgs } from "./UpdateAccesslogreplyformArgs";
import { DeleteAccesslogreplyformArgs } from "./DeleteAccesslogreplyformArgs";
import { AccesslogreplyformService } from "../accesslogreplyform.service";
@graphql.Resolver(() => Accesslogreplyform)
export class AccesslogreplyformResolverBase {
  constructor(protected readonly service: AccesslogreplyformService) {}

  async _accesslogreplyformsMeta(
    @graphql.Args() args: AccesslogreplyformCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Accesslogreplyform])
  async accesslogreplyforms(
    @graphql.Args() args: AccesslogreplyformFindManyArgs
  ): Promise<Accesslogreplyform[]> {
    return this.service.accesslogreplyforms(args);
  }

  @graphql.Query(() => Accesslogreplyform, { nullable: true })
  async accesslogreplyform(
    @graphql.Args() args: AccesslogreplyformFindUniqueArgs
  ): Promise<Accesslogreplyform | null> {
    const result = await this.service.accesslogreplyform(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Accesslogreplyform)
  async createAccesslogreplyform(
    @graphql.Args() args: CreateAccesslogreplyformArgs
  ): Promise<Accesslogreplyform> {
    return await this.service.createAccesslogreplyform({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Accesslogreplyform)
  async updateAccesslogreplyform(
    @graphql.Args() args: UpdateAccesslogreplyformArgs
  ): Promise<Accesslogreplyform | null> {
    try {
      return await this.service.updateAccesslogreplyform({
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

  @graphql.Mutation(() => Accesslogreplyform)
  async deleteAccesslogreplyform(
    @graphql.Args() args: DeleteAccesslogreplyformArgs
  ): Promise<Accesslogreplyform | null> {
    try {
      return await this.service.deleteAccesslogreplyform(args);
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
