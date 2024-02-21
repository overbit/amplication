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
import { ScsUserService } from "../scsUser.service";
import { ScsUserCreateInput } from "./ScsUserCreateInput";
import { ScsUser } from "./ScsUser";
import { ScsUserFindManyArgs } from "./ScsUserFindManyArgs";
import { ScsUserWhereUniqueInput } from "./ScsUserWhereUniqueInput";
import { ScsUserUpdateInput } from "./ScsUserUpdateInput";

export class ScsUserControllerBase {
  constructor(protected readonly service: ScsUserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScsUser })
  async createScsUser(
    @common.Body() data: ScsUserCreateInput
  ): Promise<ScsUser> {
    return await this.service.createScsUser({
      data: data,
      select: {
        usersId: true,
        cmuGuid: true,
        csId: true,
        andrewId: true,
        eceId: true,
        qatarId: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScsUser] })
  @ApiNestedQuery(ScsUserFindManyArgs)
  async scsUsers(@common.Req() request: Request): Promise<ScsUser[]> {
    const args = plainToClass(ScsUserFindManyArgs, request.query);
    return this.service.scsUsers({
      ...args,
      select: {
        usersId: true,
        cmuGuid: true,
        csId: true,
        andrewId: true,
        eceId: true,
        qatarId: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScsUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async scsUser(
    @common.Param() params: ScsUserWhereUniqueInput
  ): Promise<ScsUser | null> {
    const result = await this.service.scsUser({
      where: params,
      select: {
        usersId: true,
        cmuGuid: true,
        csId: true,
        andrewId: true,
        eceId: true,
        qatarId: true,
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
  @swagger.ApiOkResponse({ type: ScsUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateScsUser(
    @common.Param() params: ScsUserWhereUniqueInput,
    @common.Body() data: ScsUserUpdateInput
  ): Promise<ScsUser | null> {
    try {
      return await this.service.updateScsUser({
        where: params,
        data: data,
        select: {
          usersId: true,
          cmuGuid: true,
          csId: true,
          andrewId: true,
          eceId: true,
          qatarId: true,
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
  @swagger.ApiOkResponse({ type: ScsUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteScsUser(
    @common.Param() params: ScsUserWhereUniqueInput
  ): Promise<ScsUser | null> {
    try {
      return await this.service.deleteScsUser({
        where: params,
        select: {
          usersId: true,
          cmuGuid: true,
          csId: true,
          andrewId: true,
          eceId: true,
          qatarId: true,
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
