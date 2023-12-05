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
import { MhciSlateToeflService } from "../mhciSlateToefl.service";
import { MhciSlateToeflCreateInput } from "./MhciSlateToeflCreateInput";
import { MhciSlateToefl } from "./MhciSlateToefl";
import { MhciSlateToeflFindManyArgs } from "./MhciSlateToeflFindManyArgs";
import { MhciSlateToeflWhereUniqueInput } from "./MhciSlateToeflWhereUniqueInput";
import { MhciSlateToeflUpdateInput } from "./MhciSlateToeflUpdateInput";

export class MhciSlateToeflControllerBase {
  constructor(protected readonly service: MhciSlateToeflService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciSlateToefl })
  async createMhciSlateToefl(
    @common.Body() data: MhciSlateToeflCreateInput
  ): Promise<MhciSlateToefl> {
    return await this.service.createMhciSlateToefl({
      data: data,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        toeflListening: true,
        toeflReading: true,
        toeflSpeaking: true,
        toeflStructureWrittenExpression: true,
        toeflTotal: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciSlateToefl] })
  @ApiNestedQuery(MhciSlateToeflFindManyArgs)
  async mhciSlateToefls(
    @common.Req() request: Request
  ): Promise<MhciSlateToefl[]> {
    const args = plainToClass(MhciSlateToeflFindManyArgs, request.query);
    return this.service.mhciSlateToefls({
      ...args,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        toeflListening: true,
        toeflReading: true,
        toeflSpeaking: true,
        toeflStructureWrittenExpression: true,
        toeflTotal: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciSlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mhciSlateToefl(
    @common.Param() params: MhciSlateToeflWhereUniqueInput
  ): Promise<MhciSlateToefl | null> {
    const result = await this.service.mhciSlateToefl({
      where: params,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        toeflListening: true,
        toeflReading: true,
        toeflSpeaking: true,
        toeflStructureWrittenExpression: true,
        toeflTotal: true,
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
  @swagger.ApiOkResponse({ type: MhciSlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMhciSlateToefl(
    @common.Param() params: MhciSlateToeflWhereUniqueInput,
    @common.Body() data: MhciSlateToeflUpdateInput
  ): Promise<MhciSlateToefl | null> {
    try {
      return await this.service.updateMhciSlateToefl({
        where: params,
        data: data,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          toeflListening: true,
          toeflReading: true,
          toeflSpeaking: true,
          toeflStructureWrittenExpression: true,
          toeflTotal: true,
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
  @swagger.ApiOkResponse({ type: MhciSlateToefl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMhciSlateToefl(
    @common.Param() params: MhciSlateToeflWhereUniqueInput
  ): Promise<MhciSlateToefl | null> {
    try {
      return await this.service.deleteMhciSlateToefl({
        where: params,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          toeflListening: true,
          toeflReading: true,
          toeflSpeaking: true,
          toeflStructureWrittenExpression: true,
          toeflTotal: true,
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
