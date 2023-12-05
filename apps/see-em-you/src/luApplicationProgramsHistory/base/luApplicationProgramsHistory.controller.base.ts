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
import { LuApplicationProgramsHistoryService } from "../luApplicationProgramsHistory.service";
import { LuApplicationProgramsHistoryCreateInput } from "./LuApplicationProgramsHistoryCreateInput";
import { LuApplicationProgramsHistory } from "./LuApplicationProgramsHistory";
import { LuApplicationProgramsHistoryFindManyArgs } from "./LuApplicationProgramsHistoryFindManyArgs";
import { LuApplicationProgramsHistoryWhereUniqueInput } from "./LuApplicationProgramsHistoryWhereUniqueInput";
import { LuApplicationProgramsHistoryUpdateInput } from "./LuApplicationProgramsHistoryUpdateInput";

export class LuApplicationProgramsHistoryControllerBase {
  constructor(
    protected readonly service: LuApplicationProgramsHistoryService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuApplicationProgramsHistory })
  async createLuApplicationProgramsHistory(
    @common.Body() data: LuApplicationProgramsHistoryCreateInput
  ): Promise<LuApplicationProgramsHistory> {
    return await this.service.createLuApplicationProgramsHistory({
      data: data,
      select: {
        applicationId: true,
        choice: true,
        createdDate: true,
        deletedBy: true,
        id: true,
        lapId: true,
        programId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LuApplicationProgramsHistory] })
  @ApiNestedQuery(LuApplicationProgramsHistoryFindManyArgs)
  async luApplicationProgramsHistories(
    @common.Req() request: Request
  ): Promise<LuApplicationProgramsHistory[]> {
    const args = plainToClass(
      LuApplicationProgramsHistoryFindManyArgs,
      request.query
    );
    return this.service.luApplicationProgramsHistories({
      ...args,
      select: {
        applicationId: true,
        choice: true,
        createdDate: true,
        deletedBy: true,
        id: true,
        lapId: true,
        programId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LuApplicationProgramsHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luApplicationProgramsHistory(
    @common.Param() params: LuApplicationProgramsHistoryWhereUniqueInput
  ): Promise<LuApplicationProgramsHistory | null> {
    const result = await this.service.luApplicationProgramsHistory({
      where: params,
      select: {
        applicationId: true,
        choice: true,
        createdDate: true,
        deletedBy: true,
        id: true,
        lapId: true,
        programId: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationProgramsHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuApplicationProgramsHistory(
    @common.Param() params: LuApplicationProgramsHistoryWhereUniqueInput,
    @common.Body() data: LuApplicationProgramsHistoryUpdateInput
  ): Promise<LuApplicationProgramsHistory | null> {
    try {
      return await this.service.updateLuApplicationProgramsHistory({
        where: params,
        data: data,
        select: {
          applicationId: true,
          choice: true,
          createdDate: true,
          deletedBy: true,
          id: true,
          lapId: true,
          programId: true,
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
  @swagger.ApiOkResponse({ type: LuApplicationProgramsHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuApplicationProgramsHistory(
    @common.Param() params: LuApplicationProgramsHistoryWhereUniqueInput
  ): Promise<LuApplicationProgramsHistory | null> {
    try {
      return await this.service.deleteLuApplicationProgramsHistory({
        where: params,
        select: {
          applicationId: true,
          choice: true,
          createdDate: true,
          deletedBy: true,
          id: true,
          lapId: true,
          programId: true,
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
