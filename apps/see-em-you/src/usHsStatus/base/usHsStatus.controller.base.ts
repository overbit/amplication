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
import { UsHsStatusService } from "../usHsStatus.service";
import { UsHsStatusCreateInput } from "./UsHsStatusCreateInput";
import { UsHsStatus } from "./UsHsStatus";
import { UsHsStatusFindManyArgs } from "./UsHsStatusFindManyArgs";
import { UsHsStatusWhereUniqueInput } from "./UsHsStatusWhereUniqueInput";
import { UsHsStatusUpdateInput } from "./UsHsStatusUpdateInput";

export class UsHsStatusControllerBase {
  constructor(protected readonly service: UsHsStatusService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UsHsStatus })
  async createUsHsStatus(
    @common.Body() data: UsHsStatusCreateInput
  ): Promise<UsHsStatus> {
    return await this.service.createUsHsStatus({
      data: data,
      select: {
        anyUsHs: true,
        appId: true,
        firstGen: true,
        firstGenGrad: true,
        id: true,
        pell: true,
        permZipGrad: true,
        ugFedWorkStudy: true,
        usHSGrad: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UsHsStatus] })
  @ApiNestedQuery(UsHsStatusFindManyArgs)
  async usHsStatuses(@common.Req() request: Request): Promise<UsHsStatus[]> {
    const args = plainToClass(UsHsStatusFindManyArgs, request.query);
    return this.service.usHsStatuses({
      ...args,
      select: {
        anyUsHs: true,
        appId: true,
        firstGen: true,
        firstGenGrad: true,
        id: true,
        pell: true,
        permZipGrad: true,
        ugFedWorkStudy: true,
        usHSGrad: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UsHsStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async usHsStatus(
    @common.Param() params: UsHsStatusWhereUniqueInput
  ): Promise<UsHsStatus | null> {
    const result = await this.service.usHsStatus({
      where: params,
      select: {
        anyUsHs: true,
        appId: true,
        firstGen: true,
        firstGenGrad: true,
        id: true,
        pell: true,
        permZipGrad: true,
        ugFedWorkStudy: true,
        usHSGrad: true,
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
  @swagger.ApiOkResponse({ type: UsHsStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsHsStatus(
    @common.Param() params: UsHsStatusWhereUniqueInput,
    @common.Body() data: UsHsStatusUpdateInput
  ): Promise<UsHsStatus | null> {
    try {
      return await this.service.updateUsHsStatus({
        where: params,
        data: data,
        select: {
          anyUsHs: true,
          appId: true,
          firstGen: true,
          firstGenGrad: true,
          id: true,
          pell: true,
          permZipGrad: true,
          ugFedWorkStudy: true,
          usHSGrad: true,
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
  @swagger.ApiOkResponse({ type: UsHsStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsHsStatus(
    @common.Param() params: UsHsStatusWhereUniqueInput
  ): Promise<UsHsStatus | null> {
    try {
      return await this.service.deleteUsHsStatus({
        where: params,
        select: {
          anyUsHs: true,
          appId: true,
          firstGen: true,
          firstGenGrad: true,
          id: true,
          pell: true,
          permZipGrad: true,
          ugFedWorkStudy: true,
          usHSGrad: true,
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
