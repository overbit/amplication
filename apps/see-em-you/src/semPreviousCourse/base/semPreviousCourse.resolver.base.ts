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
import { CreateSemPreviousCourseArgs } from "./CreateSemPreviousCourseArgs";
import { UpdateSemPreviousCourseArgs } from "./UpdateSemPreviousCourseArgs";
import { DeleteSemPreviousCourseArgs } from "./DeleteSemPreviousCourseArgs";
import { SemPreviousCourseCountArgs } from "./SemPreviousCourseCountArgs";
import { SemPreviousCourseFindManyArgs } from "./SemPreviousCourseFindManyArgs";
import { SemPreviousCourseFindUniqueArgs } from "./SemPreviousCourseFindUniqueArgs";
import { SemPreviousCourse } from "./SemPreviousCourse";
import { SemPreviousCourseService } from "../semPreviousCourse.service";
@graphql.Resolver(() => SemPreviousCourse)
export class SemPreviousCourseResolverBase {
  constructor(protected readonly service: SemPreviousCourseService) {}

  async _semPreviousCoursesMeta(
    @graphql.Args() args: SemPreviousCourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SemPreviousCourse])
  async semPreviousCourses(
    @graphql.Args() args: SemPreviousCourseFindManyArgs
  ): Promise<SemPreviousCourse[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => SemPreviousCourse, { nullable: true })
  async semPreviousCourse(
    @graphql.Args() args: SemPreviousCourseFindUniqueArgs
  ): Promise<SemPreviousCourse | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SemPreviousCourse)
  async createSemPreviousCourse(
    @graphql.Args() args: CreateSemPreviousCourseArgs
  ): Promise<SemPreviousCourse> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SemPreviousCourse)
  async updateSemPreviousCourse(
    @graphql.Args() args: UpdateSemPreviousCourseArgs
  ): Promise<SemPreviousCourse | null> {
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

  @graphql.Mutation(() => SemPreviousCourse)
  async deleteSemPreviousCourse(
    @graphql.Args() args: DeleteSemPreviousCourseArgs
  ): Promise<SemPreviousCourse | null> {
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
