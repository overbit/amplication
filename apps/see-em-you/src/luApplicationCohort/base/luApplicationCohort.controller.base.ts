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
import { LuApplicationCohort } from "./LuApplicationCohort";
import { LuApplicationCohortFindManyArgs } from "./LuApplicationCohortFindManyArgs";
import { LuApplicationCohortWhereUniqueInput } from "./LuApplicationCohortWhereUniqueInput";
import { LuApplicationCohortUpdateInput } from "./LuApplicationCohortUpdateInput";

export class LuApplicationCohortControllerBase {
  constructor(protected readonly service: LuApplicationCohortService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuApplicationCohort })
  async createLuApplicationCohort(
    @common.Body() data: LuApplicationCohortCreateInput
  ): Promise<LuApplicationCohort> {
    return await this.service.createLuApplicationCohort({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        cohortId: true,

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
  @swagger.ApiOkResponse({ type: [LuApplicationCohort] })
  @ApiNestedQuery(LuApplicationCohortFindManyArgs)
  async luApplicationCohorts(
    @common.Req() request: Request
  ): Promise<LuApplicationCohort[]> {
    const args = plainToClass(LuApplicationCohortFindManyArgs, request.query);
    return this.service.luApplicationCohorts({
      ...args,
      select: {
        cohortId: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luApplicationCohort(
    @common.Param() params: LuApplicationCohortWhereUniqueInput
  ): Promise<LuApplicationCohort | null> {
    const result = await this.service.luApplicationCohort({
      where: params,
      select: {
        cohortId: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuApplicationCohort(
    @common.Param() params: LuApplicationCohortWhereUniqueInput,
    @common.Body() data: LuApplicationCohortUpdateInput
  ): Promise<LuApplicationCohort | null> {
    try {
      return await this.service.updateLuApplicationCohort({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          cohortId: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationCohort })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuApplicationCohort(
    @common.Param() params: LuApplicationCohortWhereUniqueInput
  ): Promise<LuApplicationCohort | null> {
    try {
      return await this.service.deleteLuApplicationCohort({
        where: params,
        select: {
          cohortId: true,

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
