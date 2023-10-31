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
import { CreateLuApplicationEtsgreArgs } from "./CreateLuApplicationEtsgreArgs";
import { UpdateLuApplicationEtsgreArgs } from "./UpdateLuApplicationEtsgreArgs";
import { DeleteLuApplicationEtsgreArgs } from "./DeleteLuApplicationEtsgreArgs";
import { LuApplicationEtsgreCountArgs } from "./LuApplicationEtsgreCountArgs";
import { LuApplicationEtsgreFindManyArgs } from "./LuApplicationEtsgreFindManyArgs";
import { LuApplicationEtsgreFindUniqueArgs } from "./LuApplicationEtsgreFindUniqueArgs";
import { LuApplicationEtsgre } from "./LuApplicationEtsgre";
import { LuApplicationEtsgreService } from "../luApplicationEtsgre.service";
@graphql.Resolver(() => LuApplicationEtsgre)
export class LuApplicationEtsgreResolverBase {
  constructor(protected readonly service: LuApplicationEtsgreService) {}

  async _luApplicationEtsgresMeta(
    @graphql.Args() args: LuApplicationEtsgreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LuApplicationEtsgre])
  async luApplicationEtsgres(
    @graphql.Args() args: LuApplicationEtsgreFindManyArgs
  ): Promise<LuApplicationEtsgre[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => LuApplicationEtsgre, { nullable: true })
  async luApplicationEtsgre(
    @graphql.Args() args: LuApplicationEtsgreFindUniqueArgs
  ): Promise<LuApplicationEtsgre | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LuApplicationEtsgre)
  async createLuApplicationEtsgre(
    @graphql.Args() args: CreateLuApplicationEtsgreArgs
  ): Promise<LuApplicationEtsgre> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LuApplicationEtsgre)
  async updateLuApplicationEtsgre(
    @graphql.Args() args: UpdateLuApplicationEtsgreArgs
  ): Promise<LuApplicationEtsgre | null> {
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

  @graphql.Mutation(() => LuApplicationEtsgre)
  async deleteLuApplicationEtsgre(
    @graphql.Args() args: DeleteLuApplicationEtsgreArgs
  ): Promise<LuApplicationEtsgre | null> {
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
