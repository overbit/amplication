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
import { ProgramGroupRoleService } from "../programGroupRole.service";
import { ProgramGroupRoleCreateInput } from "./ProgramGroupRoleCreateInput";
import { ProgramGroupRole } from "./ProgramGroupRole";
import { ProgramGroupRoleFindManyArgs } from "./ProgramGroupRoleFindManyArgs";
import { ProgramGroupRoleWhereUniqueInput } from "./ProgramGroupRoleWhereUniqueInput";
import { ProgramGroupRoleUpdateInput } from "./ProgramGroupRoleUpdateInput";

export class ProgramGroupRoleControllerBase {
  constructor(protected readonly service: ProgramGroupRoleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProgramGroupRole })
  async createProgramGroupRole(
    @common.Body() data: ProgramGroupRoleCreateInput
  ): Promise<ProgramGroupRole> {
    return await this.service.createProgramGroupRole({
      data: data,
      select: {
        id: true,
        programGroupId: true,
        roleId: true,
        usersId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProgramGroupRole] })
  @ApiNestedQuery(ProgramGroupRoleFindManyArgs)
  async programGroupRoles(
    @common.Req() request: Request
  ): Promise<ProgramGroupRole[]> {
    const args = plainToClass(ProgramGroupRoleFindManyArgs, request.query);
    return this.service.programGroupRoles({
      ...args,
      select: {
        id: true,
        programGroupId: true,
        roleId: true,
        usersId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProgramGroupRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async programGroupRole(
    @common.Param() params: ProgramGroupRoleWhereUniqueInput
  ): Promise<ProgramGroupRole | null> {
    const result = await this.service.programGroupRole({
      where: params,
      select: {
        id: true,
        programGroupId: true,
        roleId: true,
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
  @swagger.ApiOkResponse({ type: ProgramGroupRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgramGroupRole(
    @common.Param() params: ProgramGroupRoleWhereUniqueInput,
    @common.Body() data: ProgramGroupRoleUpdateInput
  ): Promise<ProgramGroupRole | null> {
    try {
      return await this.service.updateProgramGroupRole({
        where: params,
        data: data,
        select: {
          id: true,
          programGroupId: true,
          roleId: true,
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
  @swagger.ApiOkResponse({ type: ProgramGroupRole })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgramGroupRole(
    @common.Param() params: ProgramGroupRoleWhereUniqueInput
  ): Promise<ProgramGroupRole | null> {
    try {
      return await this.service.deleteProgramGroupRole({
        where: params,
        select: {
          id: true,
          programGroupId: true,
          roleId: true,
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
