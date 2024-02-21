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
import { UnitPeriodService } from "../unitPeriod.service";
import { UnitPeriodCreateInput } from "./UnitPeriodCreateInput";
import { UnitPeriod } from "./UnitPeriod";
import { UnitPeriodFindManyArgs } from "./UnitPeriodFindManyArgs";
import { UnitPeriodWhereUniqueInput } from "./UnitPeriodWhereUniqueInput";
import { UnitPeriodUpdateInput } from "./UnitPeriodUpdateInput";

export class UnitPeriodControllerBase {
  constructor(protected readonly service: UnitPeriodService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UnitPeriod })
  async createUnitPeriod(
    @common.Body() data: UnitPeriodCreateInput
  ): Promise<UnitPeriod> {
    return await this.service.createUnitPeriod({
      data: data,
      select: {
        id: true,
        unitId: true,
        periodId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UnitPeriod] })
  @ApiNestedQuery(UnitPeriodFindManyArgs)
  async unitPeriods(@common.Req() request: Request): Promise<UnitPeriod[]> {
    const args = plainToClass(UnitPeriodFindManyArgs, request.query);
    return this.service.unitPeriods({
      ...args,
      select: {
        id: true,
        unitId: true,
        periodId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UnitPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async unitPeriod(
    @common.Param() params: UnitPeriodWhereUniqueInput
  ): Promise<UnitPeriod | null> {
    const result = await this.service.unitPeriod({
      where: params,
      select: {
        id: true,
        unitId: true,
        periodId: true,
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
  @swagger.ApiOkResponse({ type: UnitPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUnitPeriod(
    @common.Param() params: UnitPeriodWhereUniqueInput,
    @common.Body() data: UnitPeriodUpdateInput
  ): Promise<UnitPeriod | null> {
    try {
      return await this.service.updateUnitPeriod({
        where: params,
        data: data,
        select: {
          id: true,
          unitId: true,
          periodId: true,
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
  @swagger.ApiOkResponse({ type: UnitPeriod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUnitPeriod(
    @common.Param() params: UnitPeriodWhereUniqueInput
  ): Promise<UnitPeriod | null> {
    try {
      return await this.service.deleteUnitPeriod({
        where: params,
        select: {
          id: true,
          unitId: true,
          periodId: true,
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
