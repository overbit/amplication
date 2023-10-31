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
import { CreateSystemenvArgs } from "./CreateSystemenvArgs";
import { UpdateSystemenvArgs } from "./UpdateSystemenvArgs";
import { DeleteSystemenvArgs } from "./DeleteSystemenvArgs";
import { SystemenvCountArgs } from "./SystemenvCountArgs";
import { SystemenvFindManyArgs } from "./SystemenvFindManyArgs";
import { SystemenvFindUniqueArgs } from "./SystemenvFindUniqueArgs";
import { Systemenv } from "./Systemenv";
import { SystemenvService } from "../systemenv.service";
@graphql.Resolver(() => Systemenv)
export class SystemenvResolverBase {
  constructor(protected readonly service: SystemenvService) {}

  async _systemenvsMeta(
    @graphql.Args() args: SystemenvCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Systemenv])
  async systemenvs(
    @graphql.Args() args: SystemenvFindManyArgs
  ): Promise<Systemenv[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Systemenv, { nullable: true })
  async systemenv(
    @graphql.Args() args: SystemenvFindUniqueArgs
  ): Promise<Systemenv | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Systemenv)
  async createSystemenv(
    @graphql.Args() args: CreateSystemenvArgs
  ): Promise<Systemenv> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Systemenv)
  async updateSystemenv(
    @graphql.Args() args: UpdateSystemenvArgs
  ): Promise<Systemenv | null> {
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

  @graphql.Mutation(() => Systemenv)
  async deleteSystemenv(
    @graphql.Args() args: DeleteSystemenvArgs
  ): Promise<Systemenv | null> {
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
