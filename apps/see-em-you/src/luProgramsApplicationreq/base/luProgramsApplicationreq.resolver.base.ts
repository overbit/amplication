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
import { CreateLuProgramsApplicationreqArgs } from "./CreateLuProgramsApplicationreqArgs";
import { UpdateLuProgramsApplicationreqArgs } from "./UpdateLuProgramsApplicationreqArgs";
import { DeleteLuProgramsApplicationreqArgs } from "./DeleteLuProgramsApplicationreqArgs";
import { LuProgramsApplicationreqCountArgs } from "./LuProgramsApplicationreqCountArgs";
import { LuProgramsApplicationreqFindManyArgs } from "./LuProgramsApplicationreqFindManyArgs";
import { LuProgramsApplicationreqFindUniqueArgs } from "./LuProgramsApplicationreqFindUniqueArgs";
import { LuProgramsApplicationreq } from "./LuProgramsApplicationreq";
import { LuProgramsApplicationreqService } from "../luProgramsApplicationreq.service";
@graphql.Resolver(() => LuProgramsApplicationreq)
export class LuProgramsApplicationreqResolverBase {
  constructor(protected readonly service: LuProgramsApplicationreqService) {}

  async _luProgramsApplicationreqsMeta(
    @graphql.Args() args: LuProgramsApplicationreqCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LuProgramsApplicationreq])
  async luProgramsApplicationreqs(
    @graphql.Args() args: LuProgramsApplicationreqFindManyArgs
  ): Promise<LuProgramsApplicationreq[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => LuProgramsApplicationreq, { nullable: true })
  async luProgramsApplicationreq(
    @graphql.Args() args: LuProgramsApplicationreqFindUniqueArgs
  ): Promise<LuProgramsApplicationreq | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LuProgramsApplicationreq)
  async createLuProgramsApplicationreq(
    @graphql.Args() args: CreateLuProgramsApplicationreqArgs
  ): Promise<LuProgramsApplicationreq> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LuProgramsApplicationreq)
  async updateLuProgramsApplicationreq(
    @graphql.Args() args: UpdateLuProgramsApplicationreqArgs
  ): Promise<LuProgramsApplicationreq | null> {
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

  @graphql.Mutation(() => LuProgramsApplicationreq)
  async deleteLuProgramsApplicationreq(
    @graphql.Args() args: DeleteLuProgramsApplicationreqArgs
  ): Promise<LuProgramsApplicationreq | null> {
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
