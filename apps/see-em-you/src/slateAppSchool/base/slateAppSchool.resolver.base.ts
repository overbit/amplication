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
import { SlateAppSchool } from "./SlateAppSchool";
import { SlateAppSchoolCountArgs } from "./SlateAppSchoolCountArgs";
import { SlateAppSchoolFindManyArgs } from "./SlateAppSchoolFindManyArgs";
import { SlateAppSchoolFindUniqueArgs } from "./SlateAppSchoolFindUniqueArgs";
import { CreateSlateAppSchoolArgs } from "./CreateSlateAppSchoolArgs";
import { UpdateSlateAppSchoolArgs } from "./UpdateSlateAppSchoolArgs";
import { DeleteSlateAppSchoolArgs } from "./DeleteSlateAppSchoolArgs";
import { SlateAppSchoolService } from "../slateAppSchool.service";
@graphql.Resolver(() => SlateAppSchool)
export class SlateAppSchoolResolverBase {
  constructor(protected readonly service: SlateAppSchoolService) {}

  async _slateAppSchoolsMeta(
    @graphql.Args() args: SlateAppSchoolCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SlateAppSchool])
  async slateAppSchools(
    @graphql.Args() args: SlateAppSchoolFindManyArgs
  ): Promise<SlateAppSchool[]> {
    return this.service.slateAppSchools(args);
  }

  @graphql.Query(() => SlateAppSchool, { nullable: true })
  async slateAppSchool(
    @graphql.Args() args: SlateAppSchoolFindUniqueArgs
  ): Promise<SlateAppSchool | null> {
    const result = await this.service.slateAppSchool(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SlateAppSchool)
  async createSlateAppSchool(
    @graphql.Args() args: CreateSlateAppSchoolArgs
  ): Promise<SlateAppSchool> {
    return await this.service.createSlateAppSchool({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SlateAppSchool)
  async updateSlateAppSchool(
    @graphql.Args() args: UpdateSlateAppSchoolArgs
  ): Promise<SlateAppSchool | null> {
    try {
      return await this.service.updateSlateAppSchool({
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

  @graphql.Mutation(() => SlateAppSchool)
  async deleteSlateAppSchool(
    @graphql.Args() args: DeleteSlateAppSchoolArgs
  ): Promise<SlateAppSchool | null> {
    try {
      return await this.service.deleteSlateAppSchool(args);
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
