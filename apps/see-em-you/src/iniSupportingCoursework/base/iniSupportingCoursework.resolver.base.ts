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
import { CreateIniSupportingCourseworkArgs } from "./CreateIniSupportingCourseworkArgs";
import { UpdateIniSupportingCourseworkArgs } from "./UpdateIniSupportingCourseworkArgs";
import { DeleteIniSupportingCourseworkArgs } from "./DeleteIniSupportingCourseworkArgs";
import { IniSupportingCourseworkCountArgs } from "./IniSupportingCourseworkCountArgs";
import { IniSupportingCourseworkFindManyArgs } from "./IniSupportingCourseworkFindManyArgs";
import { IniSupportingCourseworkFindUniqueArgs } from "./IniSupportingCourseworkFindUniqueArgs";
import { IniSupportingCoursework } from "./IniSupportingCoursework";
import { IniSupportingCourseworkService } from "../iniSupportingCoursework.service";
@graphql.Resolver(() => IniSupportingCoursework)
export class IniSupportingCourseworkResolverBase {
  constructor(protected readonly service: IniSupportingCourseworkService) {}

  async _iniSupportingCourseworksMeta(
    @graphql.Args() args: IniSupportingCourseworkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [IniSupportingCoursework])
  async iniSupportingCourseworks(
    @graphql.Args() args: IniSupportingCourseworkFindManyArgs
  ): Promise<IniSupportingCoursework[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => IniSupportingCoursework, { nullable: true })
  async iniSupportingCoursework(
    @graphql.Args() args: IniSupportingCourseworkFindUniqueArgs
  ): Promise<IniSupportingCoursework | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => IniSupportingCoursework)
  async createIniSupportingCoursework(
    @graphql.Args() args: CreateIniSupportingCourseworkArgs
  ): Promise<IniSupportingCoursework> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => IniSupportingCoursework)
  async updateIniSupportingCoursework(
    @graphql.Args() args: UpdateIniSupportingCourseworkArgs
  ): Promise<IniSupportingCoursework | null> {
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

  @graphql.Mutation(() => IniSupportingCoursework)
  async deleteIniSupportingCoursework(
    @graphql.Args() args: DeleteIniSupportingCourseworkArgs
  ): Promise<IniSupportingCoursework | null> {
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
