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
import { CreateAttendanceStatusArgs } from "./CreateAttendanceStatusArgs";
import { UpdateAttendanceStatusArgs } from "./UpdateAttendanceStatusArgs";
import { DeleteAttendanceStatusArgs } from "./DeleteAttendanceStatusArgs";
import { AttendanceStatusCountArgs } from "./AttendanceStatusCountArgs";
import { AttendanceStatusFindManyArgs } from "./AttendanceStatusFindManyArgs";
import { AttendanceStatusFindUniqueArgs } from "./AttendanceStatusFindUniqueArgs";
import { AttendanceStatus } from "./AttendanceStatus";
import { AttendanceStatusService } from "../attendanceStatus.service";
@graphql.Resolver(() => AttendanceStatus)
export class AttendanceStatusResolverBase {
  constructor(protected readonly service: AttendanceStatusService) {}

  async _attendanceStatusesMeta(
    @graphql.Args() args: AttendanceStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AttendanceStatus])
  async attendanceStatuses(
    @graphql.Args() args: AttendanceStatusFindManyArgs
  ): Promise<AttendanceStatus[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => AttendanceStatus, { nullable: true })
  async attendanceStatus(
    @graphql.Args() args: AttendanceStatusFindUniqueArgs
  ): Promise<AttendanceStatus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AttendanceStatus)
  async createAttendanceStatus(
    @graphql.Args() args: CreateAttendanceStatusArgs
  ): Promise<AttendanceStatus> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AttendanceStatus)
  async updateAttendanceStatus(
    @graphql.Args() args: UpdateAttendanceStatusArgs
  ): Promise<AttendanceStatus | null> {
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

  @graphql.Mutation(() => AttendanceStatus)
  async deleteAttendanceStatus(
    @graphql.Args() args: DeleteAttendanceStatusArgs
  ): Promise<AttendanceStatus | null> {
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
