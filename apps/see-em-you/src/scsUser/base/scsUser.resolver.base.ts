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
import { CreateScsUserArgs } from "./CreateScsUserArgs";
import { UpdateScsUserArgs } from "./UpdateScsUserArgs";
import { DeleteScsUserArgs } from "./DeleteScsUserArgs";
import { ScsUserCountArgs } from "./ScsUserCountArgs";
import { ScsUserFindManyArgs } from "./ScsUserFindManyArgs";
import { ScsUserFindUniqueArgs } from "./ScsUserFindUniqueArgs";
import { ScsUser } from "./ScsUser";
import { ScsUserService } from "../scsUser.service";
@graphql.Resolver(() => ScsUser)
export class ScsUserResolverBase {
  constructor(protected readonly service: ScsUserService) {}

  async _scsUsersMeta(
    @graphql.Args() args: ScsUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ScsUser])
  async scsUsers(
    @graphql.Args() args: ScsUserFindManyArgs
  ): Promise<ScsUser[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ScsUser, { nullable: true })
  async scsUser(
    @graphql.Args() args: ScsUserFindUniqueArgs
  ): Promise<ScsUser | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ScsUser)
  async createScsUser(
    @graphql.Args() args: CreateScsUserArgs
  ): Promise<ScsUser> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ScsUser)
  async updateScsUser(
    @graphql.Args() args: UpdateScsUserArgs
  ): Promise<ScsUser | null> {
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

  @graphql.Mutation(() => ScsUser)
  async deleteScsUser(
    @graphql.Args() args: DeleteScsUserArgs
  ): Promise<ScsUser | null> {
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
