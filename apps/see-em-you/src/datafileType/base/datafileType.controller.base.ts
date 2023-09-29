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
import { DatafileTypeService } from "../datafileType.service";
import { DatafileTypeCreateInput } from "./DatafileTypeCreateInput";
import { DatafileTypeWhereInput } from "./DatafileTypeWhereInput";
import { DatafileTypeWhereUniqueInput } from "./DatafileTypeWhereUniqueInput";
import { DatafileTypeFindManyArgs } from "./DatafileTypeFindManyArgs";
import { DatafileTypeUpdateInput } from "./DatafileTypeUpdateInput";
import { DatafileType } from "./DatafileType";

export class DatafileTypeControllerBase {
  constructor(protected readonly service: DatafileTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DatafileType })
  async create(
    @common.Body() data: DatafileTypeCreateInput
  ): Promise<DatafileType> {
    return await this.service.create({
      data: data,
      select: {
        datafileType: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DatafileType] })
  @ApiNestedQuery(DatafileTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<DatafileType[]> {
    const args = plainToClass(DatafileTypeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        datafileType: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DatafileType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: DatafileTypeWhereUniqueInput
  ): Promise<DatafileType | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        datafileType: true,
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
  @swagger.ApiOkResponse({ type: DatafileType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: DatafileTypeWhereUniqueInput,
    @common.Body() data: DatafileTypeUpdateInput
  ): Promise<DatafileType | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          datafileType: true,
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
  @swagger.ApiOkResponse({ type: DatafileType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: DatafileTypeWhereUniqueInput
  ): Promise<DatafileType | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          datafileType: true,
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
