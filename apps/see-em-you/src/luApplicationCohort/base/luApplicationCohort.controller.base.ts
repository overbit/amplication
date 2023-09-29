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
import { LuApplicationCohortService } from "../luApplicationCohort.service";
import { LuApplicationCohortCreateInput } from "./LuApplicationCohortCreateInput";
import { LuApplicationCohortWhereInput } from "./LuApplicationCohortWhereInput";
import { LuApplicationCohortWhereUniqueInput } from "./LuApplicationCohortWhereUniqueInput";
import { LuApplicationCohortFindManyArgs } from "./LuApplicationCohortFindManyArgs";
import { LuApplicationCohortUpdateInput } from "./LuApplicationCohortUpdateInput";
import { LuApplicationCohort } from "./LuApplicationCohort";

export class LuApplicationCohortControllerBase {
  constructor(protected readonly service: LuApplicationCohortService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuApplicationCohort })
  async create(
    @common.Body() data: LuApplicationCohortCreateInput
  ): Promise<LuApplicationCohort> {
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

        cohortId: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuApplicationCohort] })
  @ApiNestedQuery(LuApplicationCohortFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<LuApplicationCohort[]> {
    const args = plainToClass(LuApplicationCohortFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        cohortId: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: LuApplicationCohortWhereUniqueInput
  ): Promise<LuApplicationCohort | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        cohortId: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: LuApplicationCohortWhereUniqueInput,
    @common.Body() data: LuApplicationCohortUpdateInput
  ): Promise<LuApplicationCohort | null> {
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

          cohortId: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: LuApplicationCohortWhereUniqueInput
  ): Promise<LuApplicationCohort | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          cohortId: true,
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
