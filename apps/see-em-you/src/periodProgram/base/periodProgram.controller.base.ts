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
import { PeriodProgramService } from "../periodProgram.service";
import { PeriodProgramCreateInput } from "./PeriodProgramCreateInput";
import { PeriodProgram } from "./PeriodProgram";
import { PeriodProgramFindManyArgs } from "./PeriodProgramFindManyArgs";
import { PeriodProgramWhereUniqueInput } from "./PeriodProgramWhereUniqueInput";
import { PeriodProgramUpdateInput } from "./PeriodProgramUpdateInput";

export class PeriodProgramControllerBase {
  constructor(protected readonly service: PeriodProgramService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeriodProgram })
  async createPeriodProgram(
    @common.Body() data: PeriodProgramCreateInput
  ): Promise<PeriodProgram> {
    return await this.service.createPeriodProgram({
      data: data,
      select: {
        periodId: true,
        unitId: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PeriodProgram] })
  @ApiNestedQuery(PeriodProgramFindManyArgs)
  async periodPrograms(
    @common.Req() request: Request
  ): Promise<PeriodProgram[]> {
    const args = plainToClass(PeriodProgramFindManyArgs, request.query);
    return this.service.periodPrograms({
      ...args,
      select: {
        periodId: true,
        unitId: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PeriodProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async periodProgram(
    @common.Param() params: PeriodProgramWhereUniqueInput
  ): Promise<PeriodProgram | null> {
    const result = await this.service.periodProgram({
      where: params,
      select: {
        periodId: true,
        unitId: true,
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
  @swagger.ApiOkResponse({ type: PeriodProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePeriodProgram(
    @common.Param() params: PeriodProgramWhereUniqueInput,
    @common.Body() data: PeriodProgramUpdateInput
  ): Promise<PeriodProgram | null> {
    try {
      return await this.service.updatePeriodProgram({
        where: params,
        data: data,
        select: {
          periodId: true,
          unitId: true,
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
  @swagger.ApiOkResponse({ type: PeriodProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePeriodProgram(
    @common.Param() params: PeriodProgramWhereUniqueInput
  ): Promise<PeriodProgram | null> {
    try {
      return await this.service.deletePeriodProgram({
        where: params,
        select: {
          periodId: true,
          unitId: true,
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
