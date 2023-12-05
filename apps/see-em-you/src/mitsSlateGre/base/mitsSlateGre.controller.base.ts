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
import { MitsSlateGreService } from "../mitsSlateGre.service";
import { MitsSlateGreCreateInput } from "./MitsSlateGreCreateInput";
import { MitsSlateGre } from "./MitsSlateGre";
import { MitsSlateGreFindManyArgs } from "./MitsSlateGreFindManyArgs";
import { MitsSlateGreWhereUniqueInput } from "./MitsSlateGreWhereUniqueInput";
import { MitsSlateGreUpdateInput } from "./MitsSlateGreUpdateInput";

export class MitsSlateGreControllerBase {
  constructor(protected readonly service: MitsSlateGreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MitsSlateGre })
  async createMitsSlateGre(
    @common.Body() data: MitsSlateGreCreateInput
  ): Promise<MitsSlateGre> {
    return await this.service.createMitsSlateGre({
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
  @swagger.ApiOkResponse({ type: [MitsSlateGre] })
  @ApiNestedQuery(MitsSlateGreFindManyArgs)
  async mitsSlateGres(@common.Req() request: Request): Promise<MitsSlateGre[]> {
    const args = plainToClass(MitsSlateGreFindManyArgs, request.query);
    return this.service.mitsSlateGres({
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
  @swagger.ApiOkResponse({ type: MitsSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mitsSlateGre(
    @common.Param() params: MitsSlateGreWhereUniqueInput
  ): Promise<MitsSlateGre | null> {
    const result = await this.service.mitsSlateGre({
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
  @swagger.ApiOkResponse({ type: MitsSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMitsSlateGre(
    @common.Param() params: MitsSlateGreWhereUniqueInput,
    @common.Body() data: MitsSlateGreUpdateInput
  ): Promise<MitsSlateGre | null> {
    try {
      return await this.service.updateMitsSlateGre({
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
  @swagger.ApiOkResponse({ type: MitsSlateGre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMitsSlateGre(
    @common.Param() params: MitsSlateGreWhereUniqueInput
  ): Promise<MitsSlateGre | null> {
    try {
      return await this.service.deleteMitsSlateGre({
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
