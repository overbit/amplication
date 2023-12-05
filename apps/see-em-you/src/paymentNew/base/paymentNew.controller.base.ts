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
import { PaymentNewService } from "../paymentNew.service";
import { PaymentNewCreateInput } from "./PaymentNewCreateInput";
import { PaymentNew } from "./PaymentNew";
import { PaymentNewFindManyArgs } from "./PaymentNewFindManyArgs";
import { PaymentNewWhereUniqueInput } from "./PaymentNewWhereUniqueInput";
import { PaymentNewUpdateInput } from "./PaymentNewUpdateInput";

export class PaymentNewControllerBase {
  constructor(protected readonly service: PaymentNewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentNew })
  async createPaymentNew(
    @common.Body() data: PaymentNewCreateInput
  ): Promise<PaymentNew> {
    return await this.service.createPaymentNew({
      data: data,
      select: {
        applicationId: true,
        id: true,
        lastModTime: true,
        lastModUserId: true,
        paymentAmount: true,
        paymentIntentDate: true,
        payment_status: true,
        paymentType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentNew] })
  @ApiNestedQuery(PaymentNewFindManyArgs)
  async paymentNews(@common.Req() request: Request): Promise<PaymentNew[]> {
    const args = plainToClass(PaymentNewFindManyArgs, request.query);
    return this.service.paymentNews({
      ...args,
      select: {
        applicationId: true,
        id: true,
        lastModTime: true,
        lastModUserId: true,
        paymentAmount: true,
        paymentIntentDate: true,
        payment_status: true,
        paymentType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentNew(
    @common.Param() params: PaymentNewWhereUniqueInput
  ): Promise<PaymentNew | null> {
    const result = await this.service.paymentNew({
      where: params,
      select: {
        applicationId: true,
        id: true,
        lastModTime: true,
        lastModUserId: true,
        paymentAmount: true,
        paymentIntentDate: true,
        payment_status: true,
        paymentType: true,
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
  @swagger.ApiOkResponse({ type: PaymentNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentNew(
    @common.Param() params: PaymentNewWhereUniqueInput,
    @common.Body() data: PaymentNewUpdateInput
  ): Promise<PaymentNew | null> {
    try {
      return await this.service.updatePaymentNew({
        where: params,
        data: data,
        select: {
          applicationId: true,
          id: true,
          lastModTime: true,
          lastModUserId: true,
          paymentAmount: true,
          paymentIntentDate: true,
          payment_status: true,
          paymentType: true,
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
  @swagger.ApiOkResponse({ type: PaymentNew })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentNew(
    @common.Param() params: PaymentNewWhereUniqueInput
  ): Promise<PaymentNew | null> {
    try {
      return await this.service.deletePaymentNew({
        where: params,
        select: {
          applicationId: true,
          id: true,
          lastModTime: true,
          lastModUserId: true,
          paymentAmount: true,
          paymentIntentDate: true,
          payment_status: true,
          paymentType: true,
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
