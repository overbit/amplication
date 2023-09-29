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
import { BlacklistReviewerService } from "../blacklistReviewer.service";
import { BlacklistReviewerCreateInput } from "./BlacklistReviewerCreateInput";
import { BlacklistReviewerWhereInput } from "./BlacklistReviewerWhereInput";
import { BlacklistReviewerWhereUniqueInput } from "./BlacklistReviewerWhereUniqueInput";
import { BlacklistReviewerFindManyArgs } from "./BlacklistReviewerFindManyArgs";
import { BlacklistReviewerUpdateInput } from "./BlacklistReviewerUpdateInput";
import { BlacklistReviewer } from "./BlacklistReviewer";

export class BlacklistReviewerControllerBase {
  constructor(protected readonly service: BlacklistReviewerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlacklistReviewer })
  async create(
    @common.Body() data: BlacklistReviewerCreateInput
  ): Promise<BlacklistReviewer> {
    return await this.service.create({
      data: data,
      select: {
        appId: true,
        deny: true,
        id: true,
        reviewerId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlacklistReviewer] })
  @ApiNestedQuery(BlacklistReviewerFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BlacklistReviewer[]> {
    const args = plainToClass(BlacklistReviewerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        appId: true,
        deny: true,
        id: true,
        reviewerId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlacklistReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BlacklistReviewerWhereUniqueInput
  ): Promise<BlacklistReviewer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        appId: true,
        deny: true,
        id: true,
        reviewerId: true,
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
  @swagger.ApiOkResponse({ type: BlacklistReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BlacklistReviewerWhereUniqueInput,
    @common.Body() data: BlacklistReviewerUpdateInput
  ): Promise<BlacklistReviewer | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          appId: true,
          deny: true,
          id: true,
          reviewerId: true,
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
  @swagger.ApiOkResponse({ type: BlacklistReviewer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BlacklistReviewerWhereUniqueInput
  ): Promise<BlacklistReviewer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          appId: true,
          deny: true,
          id: true,
          reviewerId: true,
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
