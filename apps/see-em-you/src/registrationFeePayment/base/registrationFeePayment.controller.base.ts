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
import { RegistrationFeePaymentService } from "../registrationFeePayment.service";
import { RegistrationFeePaymentCreateInput } from "./RegistrationFeePaymentCreateInput";
import { RegistrationFeePaymentWhereInput } from "./RegistrationFeePaymentWhereInput";
import { RegistrationFeePaymentWhereUniqueInput } from "./RegistrationFeePaymentWhereUniqueInput";
import { RegistrationFeePaymentFindManyArgs } from "./RegistrationFeePaymentFindManyArgs";
import { RegistrationFeePaymentUpdateInput } from "./RegistrationFeePaymentUpdateInput";
import { RegistrationFeePayment } from "./RegistrationFeePayment";

export class RegistrationFeePaymentControllerBase {
  constructor(protected readonly service: RegistrationFeePaymentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RegistrationFeePayment })
  async create(
    @common.Body() data: RegistrationFeePaymentCreateInput
  ): Promise<RegistrationFeePayment> {
    return await this.service.create({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        departmentId: true,
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
  @swagger.ApiOkResponse({ type: [RegistrationFeePayment] })
  @ApiNestedQuery(RegistrationFeePaymentFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<RegistrationFeePayment[]> {
    const args = plainToClass(
      RegistrationFeePaymentFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        departmentId: true,
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
  @swagger.ApiOkResponse({ type: RegistrationFeePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RegistrationFeePaymentWhereUniqueInput
  ): Promise<RegistrationFeePayment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        departmentId: true,
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
  @swagger.ApiOkResponse({ type: RegistrationFeePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RegistrationFeePaymentWhereUniqueInput,
    @common.Body() data: RegistrationFeePaymentUpdateInput
  ): Promise<RegistrationFeePayment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          departmentId: true,
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
  @swagger.ApiOkResponse({ type: RegistrationFeePayment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RegistrationFeePaymentWhereUniqueInput
  ): Promise<RegistrationFeePayment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          departmentId: true,
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
