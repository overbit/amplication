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
import { LuReviewInterestService } from "../luReviewInterest.service";
import { LuReviewInterestCreateInput } from "./LuReviewInterestCreateInput";
import { LuReviewInterest } from "./LuReviewInterest";
import { LuReviewInterestFindManyArgs } from "./LuReviewInterestFindManyArgs";
import { LuReviewInterestWhereUniqueInput } from "./LuReviewInterestWhereUniqueInput";
import { LuReviewInterestUpdateInput } from "./LuReviewInterestUpdateInput";

export class LuReviewInterestControllerBase {
  constructor(protected readonly service: LuReviewInterestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuReviewInterest })
  async createLuReviewInterest(
    @common.Body() data: LuReviewInterestCreateInput
  ): Promise<LuReviewInterest> {
    return await this.service.createLuReviewInterest({
      data: data,
      select: {
        id: true,
        reviewId: true,
        programId: true,
        code: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuReviewInterest] })
  @ApiNestedQuery(LuReviewInterestFindManyArgs)
  async luReviewInterests(
    @common.Req() request: Request
  ): Promise<LuReviewInterest[]> {
    const args = plainToClass(LuReviewInterestFindManyArgs, request.query);
    return this.service.luReviewInterests({
      ...args,
      select: {
        id: true,
        reviewId: true,
        programId: true,
        code: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuReviewInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luReviewInterest(
    @common.Param() params: LuReviewInterestWhereUniqueInput
  ): Promise<LuReviewInterest | null> {
    const result = await this.service.luReviewInterest({
      where: params,
      select: {
        id: true,
        reviewId: true,
        programId: true,
        code: true,
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
  @swagger.ApiOkResponse({ type: LuReviewInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuReviewInterest(
    @common.Param() params: LuReviewInterestWhereUniqueInput,
    @common.Body() data: LuReviewInterestUpdateInput
  ): Promise<LuReviewInterest | null> {
    try {
      return await this.service.updateLuReviewInterest({
        where: params,
        data: data,
        select: {
          id: true,
          reviewId: true,
          programId: true,
          code: true,
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
  @swagger.ApiOkResponse({ type: LuReviewInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuReviewInterest(
    @common.Param() params: LuReviewInterestWhereUniqueInput
  ): Promise<LuReviewInterest | null> {
    try {
      return await this.service.deleteLuReviewInterest({
        where: params,
        select: {
          id: true,
          reviewId: true,
          programId: true,
          code: true,
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
