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
import { CreateProgramArgs } from "./CreateProgramArgs";
import { UpdateProgramArgs } from "./UpdateProgramArgs";
import { DeleteProgramArgs } from "./DeleteProgramArgs";
import { ProgramCountArgs } from "./ProgramCountArgs";
import { ProgramFindManyArgs } from "./ProgramFindManyArgs";
import { ProgramFindUniqueArgs } from "./ProgramFindUniqueArgs";
import { Program } from "./Program";
import { ProgramService } from "../program.service";
@graphql.Resolver(() => Program)
export class ProgramResolverBase {
  constructor(protected readonly service: ProgramService) {}

  async _programsMeta(
    @graphql.Args() args: ProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Program])
  async programs(
    @graphql.Args() args: ProgramFindManyArgs
  ): Promise<Program[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Program, { nullable: true })
  async program(
    @graphql.Args() args: ProgramFindUniqueArgs
  ): Promise<Program | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Program)
  async createProgram(
    @graphql.Args() args: CreateProgramArgs
  ): Promise<Program> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Program)
  async updateProgram(
    @graphql.Args() args: UpdateProgramArgs
  ): Promise<Program | null> {
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

  @graphql.Mutation(() => Program)
  async deleteProgram(
    @graphql.Args() args: DeleteProgramArgs
  ): Promise<Program | null> {
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
