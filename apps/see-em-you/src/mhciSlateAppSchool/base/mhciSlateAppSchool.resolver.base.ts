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
import { CreateMhciSlateAppSchoolArgs } from "./CreateMhciSlateAppSchoolArgs";
import { UpdateMhciSlateAppSchoolArgs } from "./UpdateMhciSlateAppSchoolArgs";
import { DeleteMhciSlateAppSchoolArgs } from "./DeleteMhciSlateAppSchoolArgs";
import { MhciSlateAppSchoolCountArgs } from "./MhciSlateAppSchoolCountArgs";
import { MhciSlateAppSchoolFindManyArgs } from "./MhciSlateAppSchoolFindManyArgs";
import { MhciSlateAppSchoolFindUniqueArgs } from "./MhciSlateAppSchoolFindUniqueArgs";
import { MhciSlateAppSchool } from "./MhciSlateAppSchool";
import { MhciSlateAppSchoolService } from "../mhciSlateAppSchool.service";
@graphql.Resolver(() => MhciSlateAppSchool)
export class MhciSlateAppSchoolResolverBase {
  constructor(protected readonly service: MhciSlateAppSchoolService) {}

  async _mhciSlateAppSchoolsMeta(
    @graphql.Args() args: MhciSlateAppSchoolCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MhciSlateAppSchool])
  async mhciSlateAppSchools(
    @graphql.Args() args: MhciSlateAppSchoolFindManyArgs
  ): Promise<MhciSlateAppSchool[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MhciSlateAppSchool, { nullable: true })
  async mhciSlateAppSchool(
    @graphql.Args() args: MhciSlateAppSchoolFindUniqueArgs
  ): Promise<MhciSlateAppSchool | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MhciSlateAppSchool)
  async createMhciSlateAppSchool(
    @graphql.Args() args: CreateMhciSlateAppSchoolArgs
  ): Promise<MhciSlateAppSchool> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MhciSlateAppSchool)
  async updateMhciSlateAppSchool(
    @graphql.Args() args: UpdateMhciSlateAppSchoolArgs
  ): Promise<MhciSlateAppSchool | null> {
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

  @graphql.Mutation(() => MhciSlateAppSchool)
  async deleteMhciSlateAppSchool(
    @graphql.Args() args: DeleteMhciSlateAppSchoolArgs
  ): Promise<MhciSlateAppSchool | null> {
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
