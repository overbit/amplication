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
import { LuReviewerGroupService } from "../luReviewerGroup.service";
import { LuReviewerGroupCreateInput } from "./LuReviewerGroupCreateInput";
import { LuReviewerGroupWhereInput } from "./LuReviewerGroupWhereInput";
import { LuReviewerGroupWhereUniqueInput } from "./LuReviewerGroupWhereUniqueInput";
import { LuReviewerGroupFindManyArgs } from "./LuReviewerGroupFindManyArgs";
import { LuReviewerGroupUpdateInput } from "./LuReviewerGroupUpdateInput";
import { LuReviewerGroup } from "./LuReviewerGroup";

export class LuReviewerGroupControllerBase {
  constructor(protected readonly service: LuReviewerGroupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuReviewerGroup })
  async create(
    @common.Body() data: LuReviewerGroupCreateInput
  ): Promise<LuReviewerGroup> {
    return await this.service.create({
      data: data,
      select: {
        departmentId: true,
        groupId: true,
        id: true,
        reviewerId: true,
        round: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuReviewerGroup] })
  @ApiNestedQuery(LuReviewerGroupFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<LuReviewerGroup[]> {
    const args = plainToClass(LuReviewerGroupFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        departmentId: true,
        groupId: true,
        id: true,
        reviewerId: true,
        round: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuReviewerGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: LuReviewerGroupWhereUniqueInput
  ): Promise<LuReviewerGroup | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        departmentId: true,
        groupId: true,
        id: true,
        reviewerId: true,
        round: true,
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
  @swagger.ApiOkResponse({ type: LuReviewerGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: LuReviewerGroupWhereUniqueInput,
    @common.Body() data: LuReviewerGroupUpdateInput
  ): Promise<LuReviewerGroup | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          departmentId: true,
          groupId: true,
          id: true,
          reviewerId: true,
          round: true,
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
  @swagger.ApiOkResponse({ type: LuReviewerGroup })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: LuReviewerGroupWhereUniqueInput
  ): Promise<LuReviewerGroup | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          departmentId: true,
          groupId: true,
          id: true,
          reviewerId: true,
          round: true,
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
