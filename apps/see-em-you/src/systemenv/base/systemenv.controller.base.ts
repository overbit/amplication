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
import { SystemenvWhereInput } from "./SystemenvWhereInput";
import { SystemenvWhereUniqueInput } from "./SystemenvWhereUniqueInput";
import { SystemenvFindManyArgs } from "./SystemenvFindManyArgs";
import { SystemenvUpdateInput } from "./SystemenvUpdateInput";
import { Systemenv } from "./Systemenv";

export class SystemenvControllerBase {
  constructor(protected readonly service: SystemenvService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Systemenv })
  async create(@common.Body() data: SystemenvCreateInput): Promise<Systemenv> {
    return await this.service.create({
      data: data,
      select: {
        appbaseprice: true,
        coorduserId: true,
        domainId: true,
        expdate: true,
        expdate2: true,
        id: true,
        sysemail: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Systemenv] })
  @ApiNestedQuery(SystemenvFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Systemenv[]> {
    const args = plainToClass(SystemenvFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        appbaseprice: true,
        coorduserId: true,
        domainId: true,
        expdate: true,
        expdate2: true,
        id: true,
        sysemail: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Systemenv })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SystemenvWhereUniqueInput
  ): Promise<Systemenv | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        appbaseprice: true,
        coorduserId: true,
        domainId: true,
        expdate: true,
        expdate2: true,
        id: true,
        sysemail: true,
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
  async update(
    @common.Param() params: SystemenvWhereUniqueInput,
    @common.Body() data: SystemenvUpdateInput
  ): Promise<Systemenv | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          appbaseprice: true,
          coorduserId: true,
          domainId: true,
          expdate: true,
          expdate2: true,
          id: true,
          sysemail: true,
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
  async delete(
    @common.Param() params: SystemenvWhereUniqueInput
  ): Promise<Systemenv | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          appbaseprice: true,
          coorduserId: true,
          domainId: true,
          expdate: true,
          expdate2: true,
          id: true,
          sysemail: true,
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
