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
import { SlateToeflService } from "../slateToefl.service";
import { SlateToeflCreateInput } from "./SlateToeflCreateInput";
import { SlateToefl } from "./SlateToefl";
import { SlateToeflFindManyArgs } from "./SlateToeflFindManyArgs";
import { SlateToeflWhereUniqueInput } from "./SlateToeflWhereUniqueInput";
import { SlateToeflUpdateInput } from "./SlateToeflUpdateInput";

export class SlateToeflControllerBase {
  constructor(protected readonly service: SlateToeflService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateToefl })
  async createSlateToefl(
    @common.Body() data: SlateToeflCreateInput
  ): Promise<SlateToefl> {
    return await this.service.createSlateToefl({
      data: data,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        toeflTotal: true,
        toeflListening: true,
        toeflReading: true,
        toeflStructureWrittenExpression: true,
        toeflSpeaking: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateToefl] })
  @ApiNestedQuery(SlateToeflFindManyArgs)
  async slateToefls(@common.Req() request: Request): Promise<SlateToefl[]> {
    const args = plainToClass(SlateToeflFindManyArgs, request.query);
    return this.service.slateToefls({
      ...args,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        toeflTotal: true,
        toeflListening: true,
        toeflReading: true,
        toeflStructureWrittenExpression: true,
        toeflSpeaking: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async slateToefl(
    @common.Param() params: SlateToeflWhereUniqueInput
  ): Promise<SlateToefl | null> {
    const result = await this.service.slateToefl({
      where: params,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        toeflTotal: true,
        toeflListening: true,
        toeflReading: true,
        toeflStructureWrittenExpression: true,
        toeflSpeaking: true,
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
  @swagger.ApiOkResponse({ type: SlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSlateToefl(
    @common.Param() params: SlateToeflWhereUniqueInput,
    @common.Body() data: SlateToeflUpdateInput
  ): Promise<SlateToefl | null> {
    try {
      return await this.service.updateSlateToefl({
        where: params,
        data: data,
        select: {
          prefix: true,
          first: true,
          middle: true,
          last: true,
          toeflTotal: true,
          toeflListening: true,
          toeflReading: true,
          toeflStructureWrittenExpression: true,
          toeflSpeaking: true,
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
  @swagger.ApiOkResponse({ type: SlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSlateToefl(
    @common.Param() params: SlateToeflWhereUniqueInput
  ): Promise<SlateToefl | null> {
    try {
      return await this.service.deleteSlateToefl({
        where: params,
        select: {
          prefix: true,
          first: true,
          middle: true,
          last: true,
          toeflTotal: true,
          toeflListening: true,
          toeflReading: true,
          toeflStructureWrittenExpression: true,
          toeflSpeaking: true,
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
