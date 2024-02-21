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
import { ReviewIniAdminService } from "../reviewIniAdmin.service";
import { ReviewIniAdminCreateInput } from "./ReviewIniAdminCreateInput";
import { ReviewIniAdmin } from "./ReviewIniAdmin";
import { ReviewIniAdminFindManyArgs } from "./ReviewIniAdminFindManyArgs";
import { ReviewIniAdminWhereUniqueInput } from "./ReviewIniAdminWhereUniqueInput";
import { ReviewIniAdminUpdateInput } from "./ReviewIniAdminUpdateInput";

export class ReviewIniAdminControllerBase {
  constructor(protected readonly service: ReviewIniAdminService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ReviewIniAdmin })
  async createReviewIniAdmin(
    @common.Body() data: ReviewIniAdminCreateInput
  ): Promise<ReviewIniAdmin> {
    return await this.service.createReviewIniAdmin({
      data: data,
      select: {
        applicationId: true,
        reviewerId: true,
        departmentId: true,
        round: true,
        comments: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ReviewIniAdmin] })
  @ApiNestedQuery(ReviewIniAdminFindManyArgs)
  async reviewIniAdmins(
    @common.Req() request: Request
  ): Promise<ReviewIniAdmin[]> {
    const args = plainToClass(ReviewIniAdminFindManyArgs, request.query);
    return this.service.reviewIniAdmins({
      ...args,
      select: {
        applicationId: true,
        reviewerId: true,
        departmentId: true,
        round: true,
        comments: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ReviewIniAdmin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reviewIniAdmin(
    @common.Param() params: ReviewIniAdminWhereUniqueInput
  ): Promise<ReviewIniAdmin | null> {
    const result = await this.service.reviewIniAdmin({
      where: params,
      select: {
        applicationId: true,
        reviewerId: true,
        departmentId: true,
        round: true,
        comments: true,
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
  @swagger.ApiOkResponse({ type: ReviewIniAdmin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReviewIniAdmin(
    @common.Param() params: ReviewIniAdminWhereUniqueInput,
    @common.Body() data: ReviewIniAdminUpdateInput
  ): Promise<ReviewIniAdmin | null> {
    try {
      return await this.service.updateReviewIniAdmin({
        where: params,
        data: data,
        select: {
          applicationId: true,
          reviewerId: true,
          departmentId: true,
          round: true,
          comments: true,
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
  @swagger.ApiOkResponse({ type: ReviewIniAdmin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReviewIniAdmin(
    @common.Param() params: ReviewIniAdminWhereUniqueInput
  ): Promise<ReviewIniAdmin | null> {
    try {
      return await this.service.deleteReviewIniAdmin({
        where: params,
        select: {
          applicationId: true,
          reviewerId: true,
          departmentId: true,
          round: true,
          comments: true,
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
