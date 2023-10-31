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
import { CreateMseBridgeCourseArgs } from "./CreateMseBridgeCourseArgs";
import { UpdateMseBridgeCourseArgs } from "./UpdateMseBridgeCourseArgs";
import { DeleteMseBridgeCourseArgs } from "./DeleteMseBridgeCourseArgs";
import { MseBridgeCourseCountArgs } from "./MseBridgeCourseCountArgs";
import { MseBridgeCourseFindManyArgs } from "./MseBridgeCourseFindManyArgs";
import { MseBridgeCourseFindUniqueArgs } from "./MseBridgeCourseFindUniqueArgs";
import { MseBridgeCourse } from "./MseBridgeCourse";
import { MseBridgeCourseService } from "../mseBridgeCourse.service";
@graphql.Resolver(() => MseBridgeCourse)
export class MseBridgeCourseResolverBase {
  constructor(protected readonly service: MseBridgeCourseService) {}

  async _mseBridgeCoursesMeta(
    @graphql.Args() args: MseBridgeCourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MseBridgeCourse])
  async mseBridgeCourses(
    @graphql.Args() args: MseBridgeCourseFindManyArgs
  ): Promise<MseBridgeCourse[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => MseBridgeCourse, { nullable: true })
  async mseBridgeCourse(
    @graphql.Args() args: MseBridgeCourseFindUniqueArgs
  ): Promise<MseBridgeCourse | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MseBridgeCourse)
  async createMseBridgeCourse(
    @graphql.Args() args: CreateMseBridgeCourseArgs
  ): Promise<MseBridgeCourse> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MseBridgeCourse)
  async updateMseBridgeCourse(
    @graphql.Args() args: UpdateMseBridgeCourseArgs
  ): Promise<MseBridgeCourse | null> {
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

  @graphql.Mutation(() => MseBridgeCourse)
  async deleteMseBridgeCourse(
    @graphql.Args() args: DeleteMseBridgeCourseArgs
  ): Promise<MseBridgeCourse | null> {
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
