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
import { IpedsEthnicityService } from "../ipedsEthnicity.service";
import { IpedsEthnicityCreateInput } from "./IpedsEthnicityCreateInput";
import { IpedsEthnicityWhereInput } from "./IpedsEthnicityWhereInput";
import { IpedsEthnicityWhereUniqueInput } from "./IpedsEthnicityWhereUniqueInput";
import { IpedsEthnicityFindManyArgs } from "./IpedsEthnicityFindManyArgs";
import { IpedsEthnicityUpdateInput } from "./IpedsEthnicityUpdateInput";
import { IpedsEthnicity } from "./IpedsEthnicity";

export class IpedsEthnicityControllerBase {
  constructor(protected readonly service: IpedsEthnicityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IpedsEthnicity })
  async create(
    @common.Body() data: IpedsEthnicityCreateInput
  ): Promise<IpedsEthnicity> {
    return await this.service.create({
      data: data,
      select: {
        ethnicityId: true,
        id: true,
        ipedsEthnicity: true,
        sortOrder: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [IpedsEthnicity] })
  @ApiNestedQuery(IpedsEthnicityFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<IpedsEthnicity[]> {
    const args = plainToClass(IpedsEthnicityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        ethnicityId: true,
        id: true,
        ipedsEthnicity: true,
        sortOrder: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: IpedsEthnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: IpedsEthnicityWhereUniqueInput
  ): Promise<IpedsEthnicity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        ethnicityId: true,
        id: true,
        ipedsEthnicity: true,
        sortOrder: true,
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
  @swagger.ApiOkResponse({ type: IpedsEthnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: IpedsEthnicityWhereUniqueInput,
    @common.Body() data: IpedsEthnicityUpdateInput
  ): Promise<IpedsEthnicity | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          ethnicityId: true,
          id: true,
          ipedsEthnicity: true,
          sortOrder: true,
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
  @swagger.ApiOkResponse({ type: IpedsEthnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: IpedsEthnicityWhereUniqueInput
  ): Promise<IpedsEthnicity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          ethnicityId: true,
          id: true,
          ipedsEthnicity: true,
          sortOrder: true,
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
