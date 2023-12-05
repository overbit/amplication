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
import { GroupRankService } from "../groupRank.service";
import { GroupRankCreateInput } from "./GroupRankCreateInput";
import { GroupRank } from "./GroupRank";
import { GroupRankFindManyArgs } from "./GroupRankFindManyArgs";
import { GroupRankWhereUniqueInput } from "./GroupRankWhereUniqueInput";
import { GroupRankUpdateInput } from "./GroupRankUpdateInput";

export class GroupRankControllerBase {
  constructor(protected readonly service: GroupRankService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GroupRank })
  async createGroupRank(
    @common.Body() data: GroupRankCreateInput
  ): Promise<GroupRank> {
    return await this.service.createGroupRank({
      data: data,
      select: {
        comment: true,
        groupId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        round: true,
        timestamp: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GroupRank] })
  @ApiNestedQuery(GroupRankFindManyArgs)
  async groupRanks(@common.Req() request: Request): Promise<GroupRank[]> {
    const args = plainToClass(GroupRankFindManyArgs, request.query);
    return this.service.groupRanks({
      ...args,
      select: {
        comment: true,
        groupId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        round: true,
        timestamp: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GroupRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async groupRank(
    @common.Param() params: GroupRankWhereUniqueInput
  ): Promise<GroupRank | null> {
    const result = await this.service.groupRank({
      where: params,
      select: {
        comment: true,
        groupId: true,
        id: true,
        luUsersUsertypesId: true,
        periodId: true,
        ranking: true,
        round: true,
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
  @swagger.ApiOkResponse({ type: GroupRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGroupRank(
    @common.Param() params: GroupRankWhereUniqueInput,
    @common.Body() data: GroupRankUpdateInput
  ): Promise<GroupRank | null> {
    try {
      return await this.service.updateGroupRank({
        where: params,
        data: data,
        select: {
          comment: true,
          groupId: true,
          id: true,
          luUsersUsertypesId: true,
          periodId: true,
          ranking: true,
          round: true,
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
  @swagger.ApiOkResponse({ type: GroupRank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGroupRank(
    @common.Param() params: GroupRankWhereUniqueInput
  ): Promise<GroupRank | null> {
    try {
      return await this.service.deleteGroupRank({
        where: params,
        select: {
          comment: true,
          groupId: true,
          id: true,
          luUsersUsertypesId: true,
          periodId: true,
          ranking: true,
          round: true,
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
