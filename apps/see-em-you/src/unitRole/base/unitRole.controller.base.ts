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
import { UnitRoleService } from "../unitRole.service";
import { UnitRoleCreateInput } from "./UnitRoleCreateInput";
import { UnitRoleWhereInput } from "./UnitRoleWhereInput";
import { UnitRoleWhereUniqueInput } from "./UnitRoleWhereUniqueInput";
import { UnitRoleFindManyArgs } from "./UnitRoleFindManyArgs";
import { UnitRoleUpdateInput } from "./UnitRoleUpdateInput";
import { UnitRole } from "./UnitRole";

export class UnitRoleControllerBase {
  constructor(protected readonly service: UnitRoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UnitRole })
  async create(@common.Body() data: UnitRoleCreateInput): Promise<UnitRole> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        luUsersUsertypesId: true,
        roleId: true,
        unitId: true,
        usersId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UnitRole] })
  @ApiNestedQuery(UnitRoleFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<UnitRole[]> {
    const args = plainToClass(UnitRoleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        luUsersUsertypesId: true,
        roleId: true,
        unitId: true,
        usersId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UnitRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: UnitRoleWhereUniqueInput
  ): Promise<UnitRole | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        luUsersUsertypesId: true,
        roleId: true,
        unitId: true,
        usersId: true,
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
  @swagger.ApiOkResponse({ type: UnitRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: UnitRoleWhereUniqueInput,
    @common.Body() data: UnitRoleUpdateInput
  ): Promise<UnitRole | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          luUsersUsertypesId: true,
          roleId: true,
          unitId: true,
          usersId: true,
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
  @swagger.ApiOkResponse({ type: UnitRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: UnitRoleWhereUniqueInput
  ): Promise<UnitRole | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          luUsersUsertypesId: true,
          roleId: true,
          unitId: true,
          usersId: true,
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
