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
import { MhciPrereqsReviewerService } from "../mhciPrereqsReviewer.service";
import { MhciPrereqsReviewerCreateInput } from "./MhciPrereqsReviewerCreateInput";
import { MhciPrereqsReviewerWhereInput } from "./MhciPrereqsReviewerWhereInput";
import { MhciPrereqsReviewerWhereUniqueInput } from "./MhciPrereqsReviewerWhereUniqueInput";
import { MhciPrereqsReviewerFindManyArgs } from "./MhciPrereqsReviewerFindManyArgs";
import { MhciPrereqsReviewerUpdateInput } from "./MhciPrereqsReviewerUpdateInput";
import { MhciPrereqsReviewer } from "./MhciPrereqsReviewer";

export class MhciPrereqsReviewerControllerBase {
  constructor(protected readonly service: MhciPrereqsReviewerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciPrereqsReviewer })
  async create(
    @common.Body() data: MhciPrereqsReviewerCreateInput
  ): Promise<MhciPrereqsReviewer> {
    return await this.service.create({
      data: data,
      select: {
        emailNotification: true,
        id: true,
        placeoutPeriodId: true,
        prereqType: true,
        reviewerLuuId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciPrereqsReviewer] })
  @ApiNestedQuery(MhciPrereqsReviewerFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<MhciPrereqsReviewer[]> {
    const args = plainToClass(MhciPrereqsReviewerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        emailNotification: true,
        id: true,
        placeoutPeriodId: true,
        prereqType: true,
        reviewerLuuId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciPrereqsReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: MhciPrereqsReviewerWhereUniqueInput
  ): Promise<MhciPrereqsReviewer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        emailNotification: true,
        id: true,
        placeoutPeriodId: true,
        prereqType: true,
        reviewerLuuId: true,
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
  @swagger.ApiOkResponse({ type: MhciPrereqsReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: MhciPrereqsReviewerWhereUniqueInput,
    @common.Body() data: MhciPrereqsReviewerUpdateInput
  ): Promise<MhciPrereqsReviewer | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          emailNotification: true,
          id: true,
          placeoutPeriodId: true,
          prereqType: true,
          reviewerLuuId: true,
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
  @swagger.ApiOkResponse({ type: MhciPrereqsReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: MhciPrereqsReviewerWhereUniqueInput
  ): Promise<MhciPrereqsReviewer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          emailNotification: true,
          id: true,
          placeoutPeriodId: true,
          prereqType: true,
          reviewerLuuId: true,
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
