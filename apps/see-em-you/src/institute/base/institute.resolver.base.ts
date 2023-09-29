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
import { CreateInstituteArgs } from "./CreateInstituteArgs";
import { UpdateInstituteArgs } from "./UpdateInstituteArgs";
import { DeleteInstituteArgs } from "./DeleteInstituteArgs";
import { InstituteCountArgs } from "./InstituteCountArgs";
import { InstituteFindManyArgs } from "./InstituteFindManyArgs";
import { InstituteFindUniqueArgs } from "./InstituteFindUniqueArgs";
import { Institute } from "./Institute";
import { InstituteService } from "../institute.service";
@graphql.Resolver(() => Institute)
export class InstituteResolverBase {
  constructor(protected readonly service: InstituteService) {}

  async _institutesMeta(
    @graphql.Args() args: InstituteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Institute])
  async institutes(
    @graphql.Args() args: InstituteFindManyArgs
  ): Promise<Institute[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Institute, { nullable: true })
  async institute(
    @graphql.Args() args: InstituteFindUniqueArgs
  ): Promise<Institute | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Institute)
  async createInstitute(
    @graphql.Args() args: CreateInstituteArgs
  ): Promise<Institute> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Institute)
  async updateInstitute(
    @graphql.Args() args: UpdateInstituteArgs
  ): Promise<Institute | null> {
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

  @graphql.Mutation(() => Institute)
  async deleteInstitute(
    @graphql.Args() args: DeleteInstituteArgs
  ): Promise<Institute | null> {
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
