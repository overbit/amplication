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
import { DecisionAoiRankMemberService } from "../decisionAoiRankMember.service";
import { DecisionAoiRankMemberCreateInput } from "./DecisionAoiRankMemberCreateInput";
import { DecisionAoiRankMemberWhereInput } from "./DecisionAoiRankMemberWhereInput";
import { DecisionAoiRankMemberWhereUniqueInput } from "./DecisionAoiRankMemberWhereUniqueInput";
import { DecisionAoiRankMemberFindManyArgs } from "./DecisionAoiRankMemberFindManyArgs";
import { DecisionAoiRankMemberUpdateInput } from "./DecisionAoiRankMemberUpdateInput";
import { DecisionAoiRankMember } from "./DecisionAoiRankMember";

export class DecisionAoiRankMemberControllerBase {
  constructor(protected readonly service: DecisionAoiRankMemberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DecisionAoiRankMember })
  async create(
    @common.Body() data: DecisionAoiRankMemberCreateInput
  ): Promise<DecisionAoiRankMember> {
    return await this.service.create({
      data: data,
      select: {
        applicationId: true,
        arank: true,
        decision: true,
        departmentId: true,
        id: true,
        interestId: true,
        periodId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DecisionAoiRankMember] })
  @ApiNestedQuery(DecisionAoiRankMemberFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<DecisionAoiRankMember[]> {
    const args = plainToClass(DecisionAoiRankMemberFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationId: true,
        arank: true,
        decision: true,
        departmentId: true,
        id: true,
        interestId: true,
        periodId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DecisionAoiRankMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: DecisionAoiRankMemberWhereUniqueInput
  ): Promise<DecisionAoiRankMember | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationId: true,
        arank: true,
        decision: true,
        departmentId: true,
        id: true,
        interestId: true,
        periodId: true,
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
  @swagger.ApiOkResponse({ type: DecisionAoiRankMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: DecisionAoiRankMemberWhereUniqueInput,
    @common.Body() data: DecisionAoiRankMemberUpdateInput
  ): Promise<DecisionAoiRankMember | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationId: true,
          arank: true,
          decision: true,
          departmentId: true,
          id: true,
          interestId: true,
          periodId: true,
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
  @swagger.ApiOkResponse({ type: DecisionAoiRankMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: DecisionAoiRankMemberWhereUniqueInput
  ): Promise<DecisionAoiRankMember | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationId: true,
          arank: true,
          decision: true,
          departmentId: true,
          id: true,
          interestId: true,
          periodId: true,
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
