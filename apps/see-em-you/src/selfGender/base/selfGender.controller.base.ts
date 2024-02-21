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
import { SelfGenderService } from "../selfGender.service";
import { SelfGenderCreateInput } from "./SelfGenderCreateInput";
import { SelfGender } from "./SelfGender";
import { SelfGenderFindManyArgs } from "./SelfGenderFindManyArgs";
import { SelfGenderWhereUniqueInput } from "./SelfGenderWhereUniqueInput";
import { SelfGenderUpdateInput } from "./SelfGenderUpdateInput";

export class SelfGenderControllerBase {
  constructor(protected readonly service: SelfGenderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SelfGender })
  async createSelfGender(
    @common.Body() data: SelfGenderCreateInput
  ): Promise<SelfGender> {
    return await this.service.createSelfGender({
      data: data,
      select: {
        userId: true,
        genderIndex: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SelfGender] })
  @ApiNestedQuery(SelfGenderFindManyArgs)
  async selfGenders(@common.Req() request: Request): Promise<SelfGender[]> {
    const args = plainToClass(SelfGenderFindManyArgs, request.query);
    return this.service.selfGenders({
      ...args,
      select: {
        userId: true,
        genderIndex: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SelfGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async selfGender(
    @common.Param() params: SelfGenderWhereUniqueInput
  ): Promise<SelfGender | null> {
    const result = await this.service.selfGender({
      where: params,
      select: {
        userId: true,
        genderIndex: true,
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
  @swagger.ApiOkResponse({ type: SelfGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSelfGender(
    @common.Param() params: SelfGenderWhereUniqueInput,
    @common.Body() data: SelfGenderUpdateInput
  ): Promise<SelfGender | null> {
    try {
      return await this.service.updateSelfGender({
        where: params,
        data: data,
        select: {
          userId: true,
          genderIndex: true,
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
  @swagger.ApiOkResponse({ type: SelfGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSelfGender(
    @common.Param() params: SelfGenderWhereUniqueInput
  ): Promise<SelfGender | null> {
    try {
      return await this.service.deleteSelfGender({
        where: params,
        select: {
          userId: true,
          genderIndex: true,
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
