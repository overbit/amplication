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
import { LtiMastersAdmitService } from "../ltiMastersAdmit.service";
import { LtiMastersAdmitCreateInput } from "./LtiMastersAdmitCreateInput";
import { LtiMastersAdmit } from "./LtiMastersAdmit";
import { LtiMastersAdmitFindManyArgs } from "./LtiMastersAdmitFindManyArgs";
import { LtiMastersAdmitWhereUniqueInput } from "./LtiMastersAdmitWhereUniqueInput";
import { LtiMastersAdmitUpdateInput } from "./LtiMastersAdmitUpdateInput";

export class LtiMastersAdmitControllerBase {
  constructor(protected readonly service: LtiMastersAdmitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LtiMastersAdmit })
  async createLtiMastersAdmit(
    @common.Body() data: LtiMastersAdmitCreateInput
  ): Promise<LtiMastersAdmit> {
    return await this.service.createLtiMastersAdmit({
      data: data,
      select: {
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LtiMastersAdmit] })
  @ApiNestedQuery(LtiMastersAdmitFindManyArgs)
  async ltiMastersAdmits(
    @common.Req() request: Request
  ): Promise<LtiMastersAdmit[]> {
    const args = plainToClass(LtiMastersAdmitFindManyArgs, request.query);
    return this.service.ltiMastersAdmits({
      ...args,
      select: {
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LtiMastersAdmit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ltiMastersAdmit(
    @common.Param() params: LtiMastersAdmitWhereUniqueInput
  ): Promise<LtiMastersAdmit | null> {
    const result = await this.service.ltiMastersAdmit({
      where: params,
      select: {
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
  @swagger.ApiOkResponse({ type: LtiMastersAdmit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLtiMastersAdmit(
    @common.Param() params: LtiMastersAdmitWhereUniqueInput,
    @common.Body() data: LtiMastersAdmitUpdateInput
  ): Promise<LtiMastersAdmit | null> {
    try {
      return await this.service.updateLtiMastersAdmit({
        where: params,
        data: data,
        select: {
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
  @swagger.ApiOkResponse({ type: LtiMastersAdmit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLtiMastersAdmit(
    @common.Param() params: LtiMastersAdmitWhereUniqueInput
  ): Promise<LtiMastersAdmit | null> {
    try {
      return await this.service.deleteLtiMastersAdmit({
        where: params,
        select: {
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
