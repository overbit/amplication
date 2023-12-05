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
import { VoucherTypeService } from "../voucherType.service";
import { VoucherTypeCreateInput } from "./VoucherTypeCreateInput";
import { VoucherType } from "./VoucherType";
import { VoucherTypeFindManyArgs } from "./VoucherTypeFindManyArgs";
import { VoucherTypeWhereUniqueInput } from "./VoucherTypeWhereUniqueInput";
import { VoucherTypeUpdateInput } from "./VoucherTypeUpdateInput";

export class VoucherTypeControllerBase {
  constructor(protected readonly service: VoucherTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VoucherType })
  async createVoucherType(
    @common.Body() data: VoucherTypeCreateInput
  ): Promise<VoucherType> {
    return await this.service.createVoucherType({
      data: data,
      select: {
        description: true,
        id: true,
        prefix: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VoucherType] })
  @ApiNestedQuery(VoucherTypeFindManyArgs)
  async voucherTypes(@common.Req() request: Request): Promise<VoucherType[]> {
    const args = plainToClass(VoucherTypeFindManyArgs, request.query);
    return this.service.voucherTypes({
      ...args,
      select: {
        description: true,
        id: true,
        prefix: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VoucherType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async voucherType(
    @common.Param() params: VoucherTypeWhereUniqueInput
  ): Promise<VoucherType | null> {
    const result = await this.service.voucherType({
      where: params,
      select: {
        description: true,
        id: true,
        prefix: true,
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
  @swagger.ApiOkResponse({ type: VoucherType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVoucherType(
    @common.Param() params: VoucherTypeWhereUniqueInput,
    @common.Body() data: VoucherTypeUpdateInput
  ): Promise<VoucherType | null> {
    try {
      return await this.service.updateVoucherType({
        where: params,
        data: data,
        select: {
          description: true,
          id: true,
          prefix: true,
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
  @swagger.ApiOkResponse({ type: VoucherType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVoucherType(
    @common.Param() params: VoucherTypeWhereUniqueInput
  ): Promise<VoucherType | null> {
    try {
      return await this.service.deleteVoucherType({
        where: params,
        select: {
          description: true,
          id: true,
          prefix: true,
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
