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
import { MitsSlateEmployService } from "../mitsSlateEmploy.service";
import { MitsSlateEmployCreateInput } from "./MitsSlateEmployCreateInput";
import { MitsSlateEmploy } from "./MitsSlateEmploy";
import { MitsSlateEmployFindManyArgs } from "./MitsSlateEmployFindManyArgs";
import { MitsSlateEmployWhereUniqueInput } from "./MitsSlateEmployWhereUniqueInput";
import { MitsSlateEmployUpdateInput } from "./MitsSlateEmployUpdateInput";

export class MitsSlateEmployControllerBase {
  constructor(protected readonly service: MitsSlateEmployService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MitsSlateEmploy })
  async createMitsSlateEmploy(
    @common.Body() data: MitsSlateEmployCreateInput
  ): Promise<MitsSlateEmploy> {
    return await this.service.createMitsSlateEmploy({
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
  @swagger.ApiOkResponse({ type: [MitsSlateEmploy] })
  @ApiNestedQuery(MitsSlateEmployFindManyArgs)
  async mitsSlateEmploys(
    @common.Req() request: Request
  ): Promise<MitsSlateEmploy[]> {
    const args = plainToClass(MitsSlateEmployFindManyArgs, request.query);
    return this.service.mitsSlateEmploys({
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
  @swagger.ApiOkResponse({ type: MitsSlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mitsSlateEmploy(
    @common.Param() params: MitsSlateEmployWhereUniqueInput
  ): Promise<MitsSlateEmploy | null> {
    const result = await this.service.mitsSlateEmploy({
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
  @swagger.ApiOkResponse({ type: MitsSlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMitsSlateEmploy(
    @common.Param() params: MitsSlateEmployWhereUniqueInput,
    @common.Body() data: MitsSlateEmployUpdateInput
  ): Promise<MitsSlateEmploy | null> {
    try {
      return await this.service.updateMitsSlateEmploy({
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
  @swagger.ApiOkResponse({ type: MitsSlateEmploy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMitsSlateEmploy(
    @common.Param() params: MitsSlateEmployWhereUniqueInput
  ): Promise<MitsSlateEmploy | null> {
    try {
      return await this.service.deleteMitsSlateEmploy({
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
