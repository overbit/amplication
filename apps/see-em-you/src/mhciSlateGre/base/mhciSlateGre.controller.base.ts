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
import { MhciSlateGreService } from "../mhciSlateGre.service";
import { MhciSlateGreCreateInput } from "./MhciSlateGreCreateInput";
import { MhciSlateGreWhereInput } from "./MhciSlateGreWhereInput";
import { MhciSlateGreWhereUniqueInput } from "./MhciSlateGreWhereUniqueInput";
import { MhciSlateGreFindManyArgs } from "./MhciSlateGreFindManyArgs";
import { MhciSlateGreUpdateInput } from "./MhciSlateGreUpdateInput";
import { MhciSlateGre } from "./MhciSlateGre";

export class MhciSlateGreControllerBase {
  constructor(protected readonly service: MhciSlateGreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciSlateGre })
  async create(
    @common.Body() data: MhciSlateGreCreateInput
  ): Promise<MhciSlateGre> {
    return await this.service.create({
      data: data,
      select: {
        first: true,
        greAnalyticalWriting: true,
        greAnalyticalWritingPct: true,
        greQuantitative: true,
        greQuantitativePct: true,
        greVerbal: true,
        greVerbalPct: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciSlateGre] })
  @ApiNestedQuery(MhciSlateGreFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<MhciSlateGre[]> {
    const args = plainToClass(MhciSlateGreFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        first: true,
        greAnalyticalWriting: true,
        greAnalyticalWritingPct: true,
        greQuantitative: true,
        greQuantitativePct: true,
        greVerbal: true,
        greVerbalPct: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: MhciSlateGreWhereUniqueInput
  ): Promise<MhciSlateGre | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        first: true,
        greAnalyticalWriting: true,
        greAnalyticalWritingPct: true,
        greQuantitative: true,
        greQuantitativePct: true,
        greVerbal: true,
        greVerbalPct: true,
        id: true,
        last: true,
        middle: true,
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
  @swagger.ApiOkResponse({ type: MhciSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: MhciSlateGreWhereUniqueInput,
    @common.Body() data: MhciSlateGreUpdateInput
  ): Promise<MhciSlateGre | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          first: true,
          greAnalyticalWriting: true,
          greAnalyticalWritingPct: true,
          greQuantitative: true,
          greQuantitativePct: true,
          greVerbal: true,
          greVerbalPct: true,
          id: true,
          last: true,
          middle: true,
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
  @swagger.ApiOkResponse({ type: MhciSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: MhciSlateGreWhereUniqueInput
  ): Promise<MhciSlateGre | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          first: true,
          greAnalyticalWriting: true,
          greAnalyticalWritingPct: true,
          greQuantitative: true,
          greQuantitativePct: true,
          greVerbal: true,
          greVerbalPct: true,
          id: true,
          last: true,
          middle: true,
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
