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
import { CcTransactionSummaryService } from "../ccTransactionSummary.service";
import { CcTransactionSummaryCreateInput } from "./CcTransactionSummaryCreateInput";
import { CcTransactionSummary } from "./CcTransactionSummary";
import { CcTransactionSummaryFindManyArgs } from "./CcTransactionSummaryFindManyArgs";
import { CcTransactionSummaryWhereUniqueInput } from "./CcTransactionSummaryWhereUniqueInput";
import { CcTransactionSummaryUpdateInput } from "./CcTransactionSummaryUpdateInput";

export class CcTransactionSummaryControllerBase {
  constructor(protected readonly service: CcTransactionSummaryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CcTransactionSummary })
  async createCcTransactionSummary(
    @common.Body() data: CcTransactionSummaryCreateInput
  ): Promise<CcTransactionSummary> {
    return await this.service.createCcTransactionSummary({
      data: data,
      select: {
        ccId: true,
        date: true,
        time: true,
        reportDate: true,
        paymentId: true,
        authCode: true,
        authMessage: true,
        settleCode: true,
        settleMessage: true,
        authAmount: true,
        settleAmount: true,
        creditAmount: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CcTransactionSummary] })
  @ApiNestedQuery(CcTransactionSummaryFindManyArgs)
  async ccTransactionSummaries(
    @common.Req() request: Request
  ): Promise<CcTransactionSummary[]> {
    const args = plainToClass(CcTransactionSummaryFindManyArgs, request.query);
    return this.service.ccTransactionSummaries({
      ...args,
      select: {
        ccId: true,
        date: true,
        time: true,
        reportDate: true,
        paymentId: true,
        authCode: true,
        authMessage: true,
        settleCode: true,
        settleMessage: true,
        authAmount: true,
        settleAmount: true,
        creditAmount: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CcTransactionSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ccTransactionSummary(
    @common.Param() params: CcTransactionSummaryWhereUniqueInput
  ): Promise<CcTransactionSummary | null> {
    const result = await this.service.ccTransactionSummary({
      where: params,
      select: {
        ccId: true,
        date: true,
        time: true,
        reportDate: true,
        paymentId: true,
        authCode: true,
        authMessage: true,
        settleCode: true,
        settleMessage: true,
        authAmount: true,
        settleAmount: true,
        creditAmount: true,
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
  @swagger.ApiOkResponse({ type: CcTransactionSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCcTransactionSummary(
    @common.Param() params: CcTransactionSummaryWhereUniqueInput,
    @common.Body() data: CcTransactionSummaryUpdateInput
  ): Promise<CcTransactionSummary | null> {
    try {
      return await this.service.updateCcTransactionSummary({
        where: params,
        data: data,
        select: {
          ccId: true,
          date: true,
          time: true,
          reportDate: true,
          paymentId: true,
          authCode: true,
          authMessage: true,
          settleCode: true,
          settleMessage: true,
          authAmount: true,
          settleAmount: true,
          creditAmount: true,
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
  @swagger.ApiOkResponse({ type: CcTransactionSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCcTransactionSummary(
    @common.Param() params: CcTransactionSummaryWhereUniqueInput
  ): Promise<CcTransactionSummary | null> {
    try {
      return await this.service.deleteCcTransactionSummary({
        where: params,
        select: {
          ccId: true,
          date: true,
          time: true,
          reportDate: true,
          paymentId: true,
          authCode: true,
          authMessage: true,
          settleCode: true,
          settleMessage: true,
          authAmount: true,
          settleAmount: true,
          creditAmount: true,
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
