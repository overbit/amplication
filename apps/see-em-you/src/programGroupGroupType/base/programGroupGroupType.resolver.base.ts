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
import { CreateProgramGroupGroupTypeArgs } from "./CreateProgramGroupGroupTypeArgs";
import { UpdateProgramGroupGroupTypeArgs } from "./UpdateProgramGroupGroupTypeArgs";
import { DeleteProgramGroupGroupTypeArgs } from "./DeleteProgramGroupGroupTypeArgs";
import { ProgramGroupGroupTypeCountArgs } from "./ProgramGroupGroupTypeCountArgs";
import { ProgramGroupGroupTypeFindManyArgs } from "./ProgramGroupGroupTypeFindManyArgs";
import { ProgramGroupGroupTypeFindUniqueArgs } from "./ProgramGroupGroupTypeFindUniqueArgs";
import { ProgramGroupGroupType } from "./ProgramGroupGroupType";
import { ProgramGroupGroupTypeService } from "../programGroupGroupType.service";
@graphql.Resolver(() => ProgramGroupGroupType)
export class ProgramGroupGroupTypeResolverBase {
  constructor(protected readonly service: ProgramGroupGroupTypeService) {}

  async _programGroupGroupTypesMeta(
    @graphql.Args() args: ProgramGroupGroupTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProgramGroupGroupType])
  async programGroupGroupTypes(
    @graphql.Args() args: ProgramGroupGroupTypeFindManyArgs
  ): Promise<ProgramGroupGroupType[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => ProgramGroupGroupType, { nullable: true })
  async programGroupGroupType(
    @graphql.Args() args: ProgramGroupGroupTypeFindUniqueArgs
  ): Promise<ProgramGroupGroupType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProgramGroupGroupType)
  async createProgramGroupGroupType(
    @graphql.Args() args: CreateProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProgramGroupGroupType)
  async updateProgramGroupGroupType(
    @graphql.Args() args: UpdateProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType | null> {
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

  @graphql.Mutation(() => ProgramGroupGroupType)
  async deleteProgramGroupGroupType(
    @graphql.Args() args: DeleteProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType | null> {
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
