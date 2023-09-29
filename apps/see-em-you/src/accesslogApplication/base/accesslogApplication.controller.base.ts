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
import { AccesslogApplicationService } from "../accesslogApplication.service";
import { AccesslogApplicationCreateInput } from "./AccesslogApplicationCreateInput";
import { AccesslogApplicationWhereInput } from "./AccesslogApplicationWhereInput";
import { AccesslogApplicationWhereUniqueInput } from "./AccesslogApplicationWhereUniqueInput";
import { AccesslogApplicationFindManyArgs } from "./AccesslogApplicationFindManyArgs";
import { AccesslogApplicationUpdateInput } from "./AccesslogApplicationUpdateInput";
import { AccesslogApplication } from "./AccesslogApplication";

export class AccesslogApplicationControllerBase {
  constructor(protected readonly service: AccesslogApplicationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AccesslogApplication })
  async create(
    @common.Body() data: AccesslogApplicationCreateInput
  ): Promise<AccesslogApplication> {
    return await this.service.create({
      data: data,
      select: {
        active: true,
        appId: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AccesslogApplication] })
  @ApiNestedQuery(AccesslogApplicationFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<AccesslogApplication[]> {
    const args = plainToClass(AccesslogApplicationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        active: true,
        appId: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AccesslogApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AccesslogApplicationWhereUniqueInput
  ): Promise<AccesslogApplication | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        active: true,
        appId: true,
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
  @swagger.ApiOkResponse({ type: AccesslogApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AccesslogApplicationWhereUniqueInput,
    @common.Body() data: AccesslogApplicationUpdateInput
  ): Promise<AccesslogApplication | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          active: true,
          appId: true,
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
  @swagger.ApiOkResponse({ type: AccesslogApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AccesslogApplicationWhereUniqueInput
  ): Promise<AccesslogApplication | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          active: true,
          appId: true,
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
