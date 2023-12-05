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
import { MergeApplicationService } from "../mergeApplication.service";
import { MergeApplicationCreateInput } from "./MergeApplicationCreateInput";
import { MergeApplication } from "./MergeApplication";
import { MergeApplicationFindManyArgs } from "./MergeApplicationFindManyArgs";
import { MergeApplicationWhereUniqueInput } from "./MergeApplicationWhereUniqueInput";
import { MergeApplicationUpdateInput } from "./MergeApplicationUpdateInput";

export class MergeApplicationControllerBase {
  constructor(protected readonly service: MergeApplicationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MergeApplication })
  async createMergeApplication(
    @common.Body() data: MergeApplicationCreateInput
  ): Promise<MergeApplication> {
    return await this.service.createMergeApplication({
      data: data,
      select: {
        baseConvertError: true,
        baseConvertMessage: true,
        baseWriteError: true,
        baseWriteMessage: true,
        id: true,
        searchTextWriteError: true,
        searchTextWriteMessage: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MergeApplication] })
  @ApiNestedQuery(MergeApplicationFindManyArgs)
  async mergeApplications(
    @common.Req() request: Request
  ): Promise<MergeApplication[]> {
    const args = plainToClass(MergeApplicationFindManyArgs, request.query);
    return this.service.mergeApplications({
      ...args,
      select: {
        baseConvertError: true,
        baseConvertMessage: true,
        baseWriteError: true,
        baseWriteMessage: true,
        id: true,
        searchTextWriteError: true,
        searchTextWriteMessage: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MergeApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mergeApplication(
    @common.Param() params: MergeApplicationWhereUniqueInput
  ): Promise<MergeApplication | null> {
    const result = await this.service.mergeApplication({
      where: params,
      select: {
        baseConvertError: true,
        baseConvertMessage: true,
        baseWriteError: true,
        baseWriteMessage: true,
        id: true,
        searchTextWriteError: true,
        searchTextWriteMessage: true,
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
  @swagger.ApiOkResponse({ type: MergeApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMergeApplication(
    @common.Param() params: MergeApplicationWhereUniqueInput,
    @common.Body() data: MergeApplicationUpdateInput
  ): Promise<MergeApplication | null> {
    try {
      return await this.service.updateMergeApplication({
        where: params,
        data: data,
        select: {
          baseConvertError: true,
          baseConvertMessage: true,
          baseWriteError: true,
          baseWriteMessage: true,
          id: true,
          searchTextWriteError: true,
          searchTextWriteMessage: true,
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
  @swagger.ApiOkResponse({ type: MergeApplication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMergeApplication(
    @common.Param() params: MergeApplicationWhereUniqueInput
  ): Promise<MergeApplication | null> {
    try {
      return await this.service.deleteMergeApplication({
        where: params,
        select: {
          baseConvertError: true,
          baseConvertMessage: true,
          baseWriteError: true,
          baseWriteMessage: true,
          id: true,
          searchTextWriteError: true,
          searchTextWriteMessage: true,
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
