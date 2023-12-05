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
import { MseSupportingCoursework } from "./MseSupportingCoursework";
import { MseSupportingCourseworkCountArgs } from "./MseSupportingCourseworkCountArgs";
import { MseSupportingCourseworkFindManyArgs } from "./MseSupportingCourseworkFindManyArgs";
import { MseSupportingCourseworkFindUniqueArgs } from "./MseSupportingCourseworkFindUniqueArgs";
import { CreateMseSupportingCourseworkArgs } from "./CreateMseSupportingCourseworkArgs";
import { UpdateMseSupportingCourseworkArgs } from "./UpdateMseSupportingCourseworkArgs";
import { DeleteMseSupportingCourseworkArgs } from "./DeleteMseSupportingCourseworkArgs";
import { MseSupportingCourseworkService } from "../mseSupportingCoursework.service";
@graphql.Resolver(() => MseSupportingCoursework)
export class MseSupportingCourseworkResolverBase {
  constructor(protected readonly service: MseSupportingCourseworkService) {}

  async _mseSupportingCourseworksMeta(
    @graphql.Args() args: MseSupportingCourseworkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MseSupportingCoursework])
  async mseSupportingCourseworks(
    @graphql.Args() args: MseSupportingCourseworkFindManyArgs
  ): Promise<MseSupportingCoursework[]> {
    return this.service.mseSupportingCourseworks(args);
  }

  @graphql.Query(() => MseSupportingCoursework, { nullable: true })
  async mseSupportingCoursework(
    @graphql.Args() args: MseSupportingCourseworkFindUniqueArgs
  ): Promise<MseSupportingCoursework | null> {
    const result = await this.service.mseSupportingCoursework(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MseSupportingCoursework)
  async createMseSupportingCoursework(
    @graphql.Args() args: CreateMseSupportingCourseworkArgs
  ): Promise<MseSupportingCoursework> {
    return await this.service.createMseSupportingCoursework({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MseSupportingCoursework)
  async updateMseSupportingCoursework(
    @graphql.Args() args: UpdateMseSupportingCourseworkArgs
  ): Promise<MseSupportingCoursework | null> {
    try {
      return await this.service.updateMseSupportingCoursework({
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

  @graphql.Mutation(() => MseSupportingCoursework)
  async deleteMseSupportingCoursework(
    @graphql.Args() args: DeleteMseSupportingCourseworkArgs
  ): Promise<MseSupportingCoursework | null> {
    try {
      return await this.service.deleteMseSupportingCoursework(args);
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
