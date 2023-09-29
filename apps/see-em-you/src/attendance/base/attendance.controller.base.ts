/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AttendanceService } from "../attendance.service";
import { AttendanceCreateInput } from "./AttendanceCreateInput";
import { AttendanceWhereInput } from "./AttendanceWhereInput";
import { AttendanceWhereUniqueInput } from "./AttendanceWhereUniqueInput";
import { AttendanceFindManyArgs } from "./AttendanceFindManyArgs";
import { AttendanceUpdateInput } from "./AttendanceUpdateInput";
import { Attendance } from "./Attendance";

export class AttendanceControllerBase {
  constructor(protected readonly service: AttendanceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attendance })
  async create(
    @common.Body() data: AttendanceCreateInput
  ): Promise<Attendance> {
    return await this.service.create({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Attendance] })
  @ApiNestedQuery(AttendanceFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Attendance[]> {
    const args = plainToClass(AttendanceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,
        status: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AttendanceWhereUniqueInput,
    @common.Body() data: AttendanceUpdateInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attendance })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AttendanceWhereUniqueInput
  ): Promise<Attendance | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          id: true,
          status: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
