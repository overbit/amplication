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
import { RecommenderInfoService } from "../recommenderInfo.service";
import { RecommenderInfoCreateInput } from "./RecommenderInfoCreateInput";
import { RecommenderInfoWhereInput } from "./RecommenderInfoWhereInput";
import { RecommenderInfoWhereUniqueInput } from "./RecommenderInfoWhereUniqueInput";
import { RecommenderInfoFindManyArgs } from "./RecommenderInfoFindManyArgs";
import { RecommenderInfoUpdateInput } from "./RecommenderInfoUpdateInput";
import { RecommenderInfo } from "./RecommenderInfo";

export class RecommenderInfoControllerBase {
  constructor(protected readonly service: RecommenderInfoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RecommenderInfo })
  async create(
    @common.Body() data: RecommenderInfoCreateInput
  ): Promise<RecommenderInfo> {
    return await this.service.create({
      data: data,
      select: {
        affiliation: true,
        id: true,
        phone: true,
        recUserId: true,
        relationshipToApplicant: true,
        title: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RecommenderInfo] })
  @ApiNestedQuery(RecommenderInfoFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<RecommenderInfo[]> {
    const args = plainToClass(RecommenderInfoFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        affiliation: true,
        id: true,
        phone: true,
        recUserId: true,
        relationshipToApplicant: true,
        title: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RecommenderInfoWhereUniqueInput
  ): Promise<RecommenderInfo | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        affiliation: true,
        id: true,
        phone: true,
        recUserId: true,
        relationshipToApplicant: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: RecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RecommenderInfoWhereUniqueInput,
    @common.Body() data: RecommenderInfoUpdateInput
  ): Promise<RecommenderInfo | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          affiliation: true,
          id: true,
          phone: true,
          recUserId: true,
          relationshipToApplicant: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: RecommenderInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RecommenderInfoWhereUniqueInput
  ): Promise<RecommenderInfo | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          affiliation: true,
          id: true,
          phone: true,
          recUserId: true,
          relationshipToApplicant: true,
          title: true,
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
