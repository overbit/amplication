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
import { CommitteeService } from "../committee.service";
import { CommitteeCreateInput } from "./CommitteeCreateInput";
import { Committee } from "./Committee";
import { CommitteeFindManyArgs } from "./CommitteeFindManyArgs";
import { CommitteeWhereUniqueInput } from "./CommitteeWhereUniqueInput";
import { CommitteeUpdateInput } from "./CommitteeUpdateInput";

export class CommitteeControllerBase {
  constructor(protected readonly service: CommitteeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Committee })
  async createCommittee(
    @common.Body() data: CommitteeCreateInput
  ): Promise<Committee> {
    return await this.service.createCommittee({
      data: data,
      select: {
        groupId: true,
        id: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Committee] })
  @ApiNestedQuery(CommitteeFindManyArgs)
  async committees(@common.Req() request: Request): Promise<Committee[]> {
    const args = plainToClass(CommitteeFindManyArgs, request.query);
    return this.service.committees({
      ...args,
      select: {
        groupId: true,
        id: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Committee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async committee(
    @common.Param() params: CommitteeWhereUniqueInput
  ): Promise<Committee | null> {
    const result = await this.service.committee({
      where: params,
      select: {
        groupId: true,
        id: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: Committee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCommittee(
    @common.Param() params: CommitteeWhereUniqueInput,
    @common.Body() data: CommitteeUpdateInput
  ): Promise<Committee | null> {
    try {
      return await this.service.updateCommittee({
        where: params,
        data: data,
        select: {
          groupId: true,
          id: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: Committee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCommittee(
    @common.Param() params: CommitteeWhereUniqueInput
  ): Promise<Committee | null> {
    try {
      return await this.service.deleteCommittee({
        where: params,
        select: {
          groupId: true,
          id: true,
          userId: true,
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
