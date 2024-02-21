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
import { LuApplicationStartSemesterService } from "../luApplicationStartSemester.service";
import { LuApplicationStartSemesterCreateInput } from "./LuApplicationStartSemesterCreateInput";
import { LuApplicationStartSemester } from "./LuApplicationStartSemester";
import { LuApplicationStartSemesterFindManyArgs } from "./LuApplicationStartSemesterFindManyArgs";
import { LuApplicationStartSemesterWhereUniqueInput } from "./LuApplicationStartSemesterWhereUniqueInput";
import { LuApplicationStartSemesterUpdateInput } from "./LuApplicationStartSemesterUpdateInput";

export class LuApplicationStartSemesterControllerBase {
  constructor(protected readonly service: LuApplicationStartSemesterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuApplicationStartSemester })
  async createLuApplicationStartSemester(
    @common.Body() data: LuApplicationStartSemesterCreateInput
  ): Promise<LuApplicationStartSemester> {
    return await this.service.createLuApplicationStartSemester({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        semester: true,
        year: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuApplicationStartSemester] })
  @ApiNestedQuery(LuApplicationStartSemesterFindManyArgs)
  async luApplicationStartSemesters(
    @common.Req() request: Request
  ): Promise<LuApplicationStartSemester[]> {
    const args = plainToClass(
      LuApplicationStartSemesterFindManyArgs,
      request.query
    );
    return this.service.luApplicationStartSemesters({
      ...args,
      select: {
        semester: true,
        year: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuApplicationStartSemester })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luApplicationStartSemester(
    @common.Param() params: LuApplicationStartSemesterWhereUniqueInput
  ): Promise<LuApplicationStartSemester | null> {
    const result = await this.service.luApplicationStartSemester({
      where: params,
      select: {
        semester: true,
        year: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationStartSemester })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuApplicationStartSemester(
    @common.Param() params: LuApplicationStartSemesterWhereUniqueInput,
    @common.Body() data: LuApplicationStartSemesterUpdateInput
  ): Promise<LuApplicationStartSemester | null> {
    try {
      return await this.service.updateLuApplicationStartSemester({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          semester: true,
          year: true,

          application: {
            select: {
              id: true,
            },
          },

          id: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationStartSemester })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuApplicationStartSemester(
    @common.Param() params: LuApplicationStartSemesterWhereUniqueInput
  ): Promise<LuApplicationStartSemester | null> {
    try {
      return await this.service.deleteLuApplicationStartSemester({
        where: params,
        select: {
          semester: true,
          year: true,

          application: {
            select: {
              id: true,
            },
          },

          id: true,
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
