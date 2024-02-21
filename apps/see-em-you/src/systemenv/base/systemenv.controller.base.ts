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
import { SystemenvService } from "../systemenv.service";
import { SystemenvCreateInput } from "./SystemenvCreateInput";
import { Systemenv } from "./Systemenv";
import { SystemenvFindManyArgs } from "./SystemenvFindManyArgs";
import { SystemenvWhereUniqueInput } from "./SystemenvWhereUniqueInput";
import { SystemenvUpdateInput } from "./SystemenvUpdateInput";

export class SystemenvControllerBase {
  constructor(protected readonly service: SystemenvService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Systemenv })
  async createSystemenv(
    @common.Body() data: SystemenvCreateInput
  ): Promise<Systemenv> {
    return await this.service.createSystemenv({
      data: data,
      select: {
        domainId: true,
        coorduserId: true,
        expdate: true,
        expdate2: true,
        appbaseprice: true,
        sysemail: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Systemenv] })
  @ApiNestedQuery(SystemenvFindManyArgs)
  async systemenvs(@common.Req() request: Request): Promise<Systemenv[]> {
    const args = plainToClass(SystemenvFindManyArgs, request.query);
    return this.service.systemenvs({
      ...args,
      select: {
        domainId: true,
        coorduserId: true,
        expdate: true,
        expdate2: true,
        appbaseprice: true,
        sysemail: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Systemenv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async systemenv(
    @common.Param() params: SystemenvWhereUniqueInput
  ): Promise<Systemenv | null> {
    const result = await this.service.systemenv({
      where: params,
      select: {
        domainId: true,
        coorduserId: true,
        expdate: true,
        expdate2: true,
        appbaseprice: true,
        sysemail: true,
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
  @swagger.ApiOkResponse({ type: Systemenv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSystemenv(
    @common.Param() params: SystemenvWhereUniqueInput,
    @common.Body() data: SystemenvUpdateInput
  ): Promise<Systemenv | null> {
    try {
      return await this.service.updateSystemenv({
        where: params,
        data: data,
        select: {
          domainId: true,
          coorduserId: true,
          expdate: true,
          expdate2: true,
          appbaseprice: true,
          sysemail: true,
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
  @swagger.ApiOkResponse({ type: Systemenv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSystemenv(
    @common.Param() params: SystemenvWhereUniqueInput
  ): Promise<Systemenv | null> {
    try {
      return await this.service.deleteSystemenv({
        where: params,
        select: {
          domainId: true,
          coorduserId: true,
          expdate: true,
          expdate2: true,
          appbaseprice: true,
          sysemail: true,
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
