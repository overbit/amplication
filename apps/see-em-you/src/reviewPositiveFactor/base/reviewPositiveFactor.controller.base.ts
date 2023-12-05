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
import { ReviewPositiveFactorService } from "../reviewPositiveFactor.service";
import { ReviewPositiveFactorCreateInput } from "./ReviewPositiveFactorCreateInput";
import { ReviewPositiveFactor } from "./ReviewPositiveFactor";
import { ReviewPositiveFactorFindManyArgs } from "./ReviewPositiveFactorFindManyArgs";
import { ReviewPositiveFactorWhereUniqueInput } from "./ReviewPositiveFactorWhereUniqueInput";
import { ReviewPositiveFactorUpdateInput } from "./ReviewPositiveFactorUpdateInput";

export class ReviewPositiveFactorControllerBase {
  constructor(protected readonly service: ReviewPositiveFactorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ReviewPositiveFactor })
  async createReviewPositiveFactor(
    @common.Body() data: ReviewPositiveFactorCreateInput
  ): Promise<ReviewPositiveFactor> {
    return await this.service.createReviewPositiveFactor({
      data: data,
      select: {
        id: true,
        positiveFactorId: true,
        reviewId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ReviewPositiveFactor] })
  @ApiNestedQuery(ReviewPositiveFactorFindManyArgs)
  async reviewPositiveFactors(
    @common.Req() request: Request
  ): Promise<ReviewPositiveFactor[]> {
    const args = plainToClass(ReviewPositiveFactorFindManyArgs, request.query);
    return this.service.reviewPositiveFactors({
      ...args,
      select: {
        id: true,
        positiveFactorId: true,
        reviewId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ReviewPositiveFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reviewPositiveFactor(
    @common.Param() params: ReviewPositiveFactorWhereUniqueInput
  ): Promise<ReviewPositiveFactor | null> {
    const result = await this.service.reviewPositiveFactor({
      where: params,
      select: {
        id: true,
        positiveFactorId: true,
        reviewId: true,
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
  @swagger.ApiOkResponse({ type: ReviewPositiveFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReviewPositiveFactor(
    @common.Param() params: ReviewPositiveFactorWhereUniqueInput,
    @common.Body() data: ReviewPositiveFactorUpdateInput
  ): Promise<ReviewPositiveFactor | null> {
    try {
      return await this.service.updateReviewPositiveFactor({
        where: params,
        data: data,
        select: {
          id: true,
          positiveFactorId: true,
          reviewId: true,
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
  @swagger.ApiOkResponse({ type: ReviewPositiveFactor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReviewPositiveFactor(
    @common.Param() params: ReviewPositiveFactorWhereUniqueInput
  ): Promise<ReviewPositiveFactor | null> {
    try {
      return await this.service.deleteReviewPositiveFactor({
        where: params,
        select: {
          id: true,
          positiveFactorId: true,
          reviewId: true,
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
