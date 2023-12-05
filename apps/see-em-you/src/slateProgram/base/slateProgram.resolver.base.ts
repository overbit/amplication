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
import { SlateProgram } from "./SlateProgram";
import { SlateProgramCountArgs } from "./SlateProgramCountArgs";
import { SlateProgramFindManyArgs } from "./SlateProgramFindManyArgs";
import { SlateProgramFindUniqueArgs } from "./SlateProgramFindUniqueArgs";
import { CreateSlateProgramArgs } from "./CreateSlateProgramArgs";
import { UpdateSlateProgramArgs } from "./UpdateSlateProgramArgs";
import { DeleteSlateProgramArgs } from "./DeleteSlateProgramArgs";
import { SlateProgramService } from "../slateProgram.service";
@graphql.Resolver(() => SlateProgram)
export class SlateProgramResolverBase {
  constructor(protected readonly service: SlateProgramService) {}

  async _slateProgramsMeta(
    @graphql.Args() args: SlateProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SlateProgram])
  async slatePrograms(
    @graphql.Args() args: SlateProgramFindManyArgs
  ): Promise<SlateProgram[]> {
    return this.service.slatePrograms(args);
  }

  @graphql.Query(() => SlateProgram, { nullable: true })
  async slateProgram(
    @graphql.Args() args: SlateProgramFindUniqueArgs
  ): Promise<SlateProgram | null> {
    const result = await this.service.slateProgram(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SlateProgram)
  async createSlateProgram(
    @graphql.Args() args: CreateSlateProgramArgs
  ): Promise<SlateProgram> {
    return await this.service.createSlateProgram({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SlateProgram)
  async updateSlateProgram(
    @graphql.Args() args: UpdateSlateProgramArgs
  ): Promise<SlateProgram | null> {
    try {
      return await this.service.updateSlateProgram({
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

  @graphql.Mutation(() => SlateProgram)
  async deleteSlateProgram(
    @graphql.Args() args: DeleteSlateProgramArgs
  ): Promise<SlateProgram | null> {
    try {
      return await this.service.deleteSlateProgram(args);
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
