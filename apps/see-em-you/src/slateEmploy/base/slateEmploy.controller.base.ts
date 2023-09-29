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
import { SlateEmployService } from "../slateEmploy.service";
import { SlateEmployCreateInput } from "./SlateEmployCreateInput";
import { SlateEmployWhereInput } from "./SlateEmployWhereInput";
import { SlateEmployWhereUniqueInput } from "./SlateEmployWhereUniqueInput";
import { SlateEmployFindManyArgs } from "./SlateEmployFindManyArgs";
import { SlateEmployUpdateInput } from "./SlateEmployUpdateInput";
import { SlateEmploy } from "./SlateEmploy";

export class SlateEmployControllerBase {
  constructor(protected readonly service: SlateEmployService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateEmploy })
  async create(
    @common.Body() data: SlateEmployCreateInput
  ): Promise<SlateEmploy> {
    return await this.service.create({
      data: data,
      select: {
        first: true,
        id: true,
        job1From: true,
        job1Organization: true,
        job1To: true,
        job2From: true,
        job2Organization: true,
        job2To: true,
        job3From: true,
        job3Organization: true,
        job3To: true,
        jobNum1YearsOfExperience: true,
        jobNum2YearsOfExperience: true,
        jobNum3YearsOfExperience: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateEmploy] })
  @ApiNestedQuery(SlateEmployFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<SlateEmploy[]> {
    const args = plainToClass(SlateEmployFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        first: true,
        id: true,
        job1From: true,
        job1Organization: true,
        job1To: true,
        job2From: true,
        job2Organization: true,
        job2To: true,
        job3From: true,
        job3Organization: true,
        job3To: true,
        jobNum1YearsOfExperience: true,
        jobNum2YearsOfExperience: true,
        jobNum3YearsOfExperience: true,
        last: true,
        middle: true,
        prefix: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SlateEmployWhereUniqueInput
  ): Promise<SlateEmploy | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        first: true,
        id: true,
        job1From: true,
        job1Organization: true,
        job1To: true,
        job2From: true,
        job2Organization: true,
        job2To: true,
        job3From: true,
        job3Organization: true,
        job3To: true,
        jobNum1YearsOfExperience: true,
        jobNum2YearsOfExperience: true,
        jobNum3YearsOfExperience: true,
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
  @swagger.ApiOkResponse({ type: SlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SlateEmployWhereUniqueInput,
    @common.Body() data: SlateEmployUpdateInput
  ): Promise<SlateEmploy | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          first: true,
          id: true,
          job1From: true,
          job1Organization: true,
          job1To: true,
          job2From: true,
          job2Organization: true,
          job2To: true,
          job3From: true,
          job3Organization: true,
          job3To: true,
          jobNum1YearsOfExperience: true,
          jobNum2YearsOfExperience: true,
          jobNum3YearsOfExperience: true,
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
  @swagger.ApiOkResponse({ type: SlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SlateEmployWhereUniqueInput
  ): Promise<SlateEmploy | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          first: true,
          id: true,
          job1From: true,
          job1Organization: true,
          job1To: true,
          job2From: true,
          job2Organization: true,
          job2To: true,
          job3From: true,
          job3Organization: true,
          job3To: true,
          jobNum1YearsOfExperience: true,
          jobNum2YearsOfExperience: true,
          jobNum3YearsOfExperience: true,
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
