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
import { EthnicityService } from "../ethnicity.service";
import { EthnicityCreateInput } from "./EthnicityCreateInput";
import { Ethnicity } from "./Ethnicity";
import { EthnicityFindManyArgs } from "./EthnicityFindManyArgs";
import { EthnicityWhereUniqueInput } from "./EthnicityWhereUniqueInput";
import { EthnicityUpdateInput } from "./EthnicityUpdateInput";

export class EthnicityControllerBase {
  constructor(protected readonly service: EthnicityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ethnicity })
  async createEthnicity(
    @common.Body() data: EthnicityCreateInput
  ): Promise<Ethnicity> {
    return await this.service.createEthnicity({
      data: data,
      select: {
        name: true,
        sortorder: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ethnicity] })
  @ApiNestedQuery(EthnicityFindManyArgs)
  async ethnicities(@common.Req() request: Request): Promise<Ethnicity[]> {
    const args = plainToClass(EthnicityFindManyArgs, request.query);
    return this.service.ethnicities({
      ...args,
      select: {
        name: true,
        sortorder: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ethnicity(
    @common.Param() params: EthnicityWhereUniqueInput
  ): Promise<Ethnicity | null> {
    const result = await this.service.ethnicity({
      where: params,
      select: {
        name: true,
        sortorder: true,
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
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEthnicity(
    @common.Param() params: EthnicityWhereUniqueInput,
    @common.Body() data: EthnicityUpdateInput
  ): Promise<Ethnicity | null> {
    try {
      return await this.service.updateEthnicity({
        where: params,
        data: data,
        select: {
          name: true,
          sortorder: true,
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
  @swagger.ApiOkResponse({ type: Ethnicity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEthnicity(
    @common.Param() params: EthnicityWhereUniqueInput
  ): Promise<Ethnicity | null> {
    try {
      return await this.service.deleteEthnicity({
        where: params,
        select: {
          name: true,
          sortorder: true,
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
