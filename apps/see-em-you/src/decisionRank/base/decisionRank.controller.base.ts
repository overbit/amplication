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
import { DecisionRankService } from "../decisionRank.service";
import { DecisionRankCreateInput } from "./DecisionRankCreateInput";
import { DecisionRankWhereInput } from "./DecisionRankWhereInput";
import { DecisionRankWhereUniqueInput } from "./DecisionRankWhereUniqueInput";
import { DecisionRankFindManyArgs } from "./DecisionRankFindManyArgs";
import { DecisionRankUpdateInput } from "./DecisionRankUpdateInput";
import { DecisionRank } from "./DecisionRank";

export class DecisionRankControllerBase {
  constructor(protected readonly service: DecisionRankService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DecisionRank })
  async create(
    @common.Body() data: DecisionRankCreateInput
  ): Promise<DecisionRank> {
    return await this.service.create({
      data: data,
      select: {
        decision: true,
        departmentId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        timestamp: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DecisionRank] })
  @ApiNestedQuery(DecisionRankFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<DecisionRank[]> {
    const args = plainToClass(DecisionRankFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        decision: true,
        departmentId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        timestamp: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DecisionRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: DecisionRankWhereUniqueInput
  ): Promise<DecisionRank | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        decision: true,
        departmentId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        timestamp: true,
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
  @swagger.ApiOkResponse({ type: DecisionRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: DecisionRankWhereUniqueInput,
    @common.Body() data: DecisionRankUpdateInput
  ): Promise<DecisionRank | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          decision: true,
          departmentId: true,
          id: true,
          luUsersUsertypesId: true,
          periodId: true,
          ranking: true,
          timestamp: true,
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
  @swagger.ApiOkResponse({ type: DecisionRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: DecisionRankWhereUniqueInput
  ): Promise<DecisionRank | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          decision: true,
          departmentId: true,
          id: true,
          luUsersUsertypesId: true,
          periodId: true,
          ranking: true,
          timestamp: true,
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
