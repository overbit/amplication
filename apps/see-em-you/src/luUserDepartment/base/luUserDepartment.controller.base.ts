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
import { LuUserDepartmentService } from "../luUserDepartment.service";
import { LuUserDepartmentCreateInput } from "./LuUserDepartmentCreateInput";
import { LuUserDepartment } from "./LuUserDepartment";
import { LuUserDepartmentFindManyArgs } from "./LuUserDepartmentFindManyArgs";
import { LuUserDepartmentWhereUniqueInput } from "./LuUserDepartmentWhereUniqueInput";
import { LuUserDepartmentUpdateInput } from "./LuUserDepartmentUpdateInput";

export class LuUserDepartmentControllerBase {
  constructor(protected readonly service: LuUserDepartmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuUserDepartment })
  async createLuUserDepartment(
    @common.Body() data: LuUserDepartmentCreateInput
  ): Promise<LuUserDepartment> {
    return await this.service.createLuUserDepartment({
      data: data,
      select: {
        departmentId: true,
        id: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuUserDepartment] })
  @ApiNestedQuery(LuUserDepartmentFindManyArgs)
  async luUserDepartments(
    @common.Req() request: Request
  ): Promise<LuUserDepartment[]> {
    const args = plainToClass(LuUserDepartmentFindManyArgs, request.query);
    return this.service.luUserDepartments({
      ...args,
      select: {
        departmentId: true,
        id: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuUserDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luUserDepartment(
    @common.Param() params: LuUserDepartmentWhereUniqueInput
  ): Promise<LuUserDepartment | null> {
    const result = await this.service.luUserDepartment({
      where: params,
      select: {
        departmentId: true,
        id: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: LuUserDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuUserDepartment(
    @common.Param() params: LuUserDepartmentWhereUniqueInput,
    @common.Body() data: LuUserDepartmentUpdateInput
  ): Promise<LuUserDepartment | null> {
    try {
      return await this.service.updateLuUserDepartment({
        where: params,
        data: data,
        select: {
          departmentId: true,
          id: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: LuUserDepartment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuUserDepartment(
    @common.Param() params: LuUserDepartmentWhereUniqueInput
  ): Promise<LuUserDepartment | null> {
    try {
      return await this.service.deleteLuUserDepartment({
        where: params,
        select: {
          departmentId: true,
          id: true,
          userId: true,
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
