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
import { ProgramType } from "./ProgramType";
import { ProgramTypeCountArgs } from "./ProgramTypeCountArgs";
import { ProgramTypeFindManyArgs } from "./ProgramTypeFindManyArgs";
import { ProgramTypeFindUniqueArgs } from "./ProgramTypeFindUniqueArgs";
import { CreateProgramTypeArgs } from "./CreateProgramTypeArgs";
import { UpdateProgramTypeArgs } from "./UpdateProgramTypeArgs";
import { DeleteProgramTypeArgs } from "./DeleteProgramTypeArgs";
import { ProgramTypeService } from "../programType.service";
@graphql.Resolver(() => ProgramType)
export class ProgramTypeResolverBase {
  constructor(protected readonly service: ProgramTypeService) {}

  async _programTypesMeta(
    @graphql.Args() args: ProgramTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProgramType])
  async programTypes(
    @graphql.Args() args: ProgramTypeFindManyArgs
  ): Promise<ProgramType[]> {
    return this.service.programTypes(args);
  }

  @graphql.Query(() => ProgramType, { nullable: true })
  async programType(
    @graphql.Args() args: ProgramTypeFindUniqueArgs
  ): Promise<ProgramType | null> {
    const result = await this.service.programType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProgramType)
  async createProgramType(
    @graphql.Args() args: CreateProgramTypeArgs
  ): Promise<ProgramType> {
    return await this.service.createProgramType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProgramType)
  async updateProgramType(
    @graphql.Args() args: UpdateProgramTypeArgs
  ): Promise<ProgramType | null> {
    try {
      return await this.service.updateProgramType({
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

  @graphql.Mutation(() => ProgramType)
  async deleteProgramType(
    @graphql.Args() args: DeleteProgramTypeArgs
  ): Promise<ProgramType | null> {
    try {
      return await this.service.deleteProgramType(args);
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
