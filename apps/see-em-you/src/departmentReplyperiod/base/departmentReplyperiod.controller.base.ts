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
import { DepartmentReplyperiodService } from "../departmentReplyperiod.service";
import { DepartmentReplyperiodCreateInput } from "./DepartmentReplyperiodCreateInput";
import { DepartmentReplyperiod } from "./DepartmentReplyperiod";
import { DepartmentReplyperiodFindManyArgs } from "./DepartmentReplyperiodFindManyArgs";
import { DepartmentReplyperiodWhereUniqueInput } from "./DepartmentReplyperiodWhereUniqueInput";
import { DepartmentReplyperiodUpdateInput } from "./DepartmentReplyperiodUpdateInput";

export class DepartmentReplyperiodControllerBase {
  constructor(protected readonly service: DepartmentReplyperiodService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DepartmentReplyperiod })
  async createDepartmentReplyperiod(
    @common.Body() data: DepartmentReplyperiodCreateInput
  ): Promise<DepartmentReplyperiod> {
    return await this.service.createDepartmentReplyperiod({
      data: data,
      select: {
        deptId: true,
        end: true,
        id: true,
        start: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DepartmentReplyperiod] })
  @ApiNestedQuery(DepartmentReplyperiodFindManyArgs)
  async departmentReplyperiods(
    @common.Req() request: Request
  ): Promise<DepartmentReplyperiod[]> {
    const args = plainToClass(DepartmentReplyperiodFindManyArgs, request.query);
    return this.service.departmentReplyperiods({
      ...args,
      select: {
        deptId: true,
        end: true,
        id: true,
        start: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DepartmentReplyperiod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async departmentReplyperiod(
    @common.Param() params: DepartmentReplyperiodWhereUniqueInput
  ): Promise<DepartmentReplyperiod | null> {
    const result = await this.service.departmentReplyperiod({
      where: params,
      select: {
        deptId: true,
        end: true,
        id: true,
        start: true,
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
  @swagger.ApiOkResponse({ type: DepartmentReplyperiod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDepartmentReplyperiod(
    @common.Param() params: DepartmentReplyperiodWhereUniqueInput,
    @common.Body() data: DepartmentReplyperiodUpdateInput
  ): Promise<DepartmentReplyperiod | null> {
    try {
      return await this.service.updateDepartmentReplyperiod({
        where: params,
        data: data,
        select: {
          deptId: true,
          end: true,
          id: true,
          start: true,
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
  @swagger.ApiOkResponse({ type: DepartmentReplyperiod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDepartmentReplyperiod(
    @common.Param() params: DepartmentReplyperiodWhereUniqueInput
  ): Promise<DepartmentReplyperiod | null> {
    try {
      return await this.service.deleteDepartmentReplyperiod({
        where: params,
        select: {
          deptId: true,
          end: true,
          id: true,
          start: true,
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
