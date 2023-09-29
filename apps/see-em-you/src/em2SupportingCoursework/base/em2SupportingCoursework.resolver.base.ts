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
import { CreateEm2SupportingCourseworkArgs } from "./CreateEm2SupportingCourseworkArgs";
import { UpdateEm2SupportingCourseworkArgs } from "./UpdateEm2SupportingCourseworkArgs";
import { DeleteEm2SupportingCourseworkArgs } from "./DeleteEm2SupportingCourseworkArgs";
import { Em2SupportingCourseworkCountArgs } from "./Em2SupportingCourseworkCountArgs";
import { Em2SupportingCourseworkFindManyArgs } from "./Em2SupportingCourseworkFindManyArgs";
import { Em2SupportingCourseworkFindUniqueArgs } from "./Em2SupportingCourseworkFindUniqueArgs";
import { Em2SupportingCoursework } from "./Em2SupportingCoursework";
import { Em2SupportingCourseworkService } from "../em2SupportingCoursework.service";
@graphql.Resolver(() => Em2SupportingCoursework)
export class Em2SupportingCourseworkResolverBase {
  constructor(protected readonly service: Em2SupportingCourseworkService) {}

  async _em2SupportingCourseworksMeta(
    @graphql.Args() args: Em2SupportingCourseworkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Em2SupportingCoursework])
  async em2SupportingCourseworks(
    @graphql.Args() args: Em2SupportingCourseworkFindManyArgs
  ): Promise<Em2SupportingCoursework[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Em2SupportingCoursework, { nullable: true })
  async em2SupportingCoursework(
    @graphql.Args() args: Em2SupportingCourseworkFindUniqueArgs
  ): Promise<Em2SupportingCoursework | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Em2SupportingCoursework)
  async createEm2SupportingCoursework(
    @graphql.Args() args: CreateEm2SupportingCourseworkArgs
  ): Promise<Em2SupportingCoursework> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Em2SupportingCoursework)
  async updateEm2SupportingCoursework(
    @graphql.Args() args: UpdateEm2SupportingCourseworkArgs
  ): Promise<Em2SupportingCoursework | null> {
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

  @graphql.Mutation(() => Em2SupportingCoursework)
  async deleteEm2SupportingCoursework(
    @graphql.Args() args: DeleteEm2SupportingCourseworkArgs
  ): Promise<Em2SupportingCoursework | null> {
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
