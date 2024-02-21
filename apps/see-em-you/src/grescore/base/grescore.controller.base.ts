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
import { GrescoreService } from "../grescore.service";
import { GrescoreCreateInput } from "./GrescoreCreateInput";
import { Grescore } from "./Grescore";
import { GrescoreFindManyArgs } from "./GrescoreFindManyArgs";
import { GrescoreWhereUniqueInput } from "./GrescoreWhereUniqueInput";
import { GrescoreUpdateInput } from "./GrescoreUpdateInput";

export class GrescoreControllerBase {
  constructor(protected readonly service: GrescoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Grescore })
  async createGrescore(
    @common.Body() data: GrescoreCreateInput
  ): Promise<Grescore> {
    return await this.service.createGrescore({
      data: data,
      select: {
        applicationId: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        analyticalscore: true,
        analyticalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        scorereceived: true,
        datafileId: true,
        athome: true,
        greEmail: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Grescore] })
  @ApiNestedQuery(GrescoreFindManyArgs)
  async grescores(@common.Req() request: Request): Promise<Grescore[]> {
    const args = plainToClass(GrescoreFindManyArgs, request.query);
    return this.service.grescores({
      ...args,
      select: {
        applicationId: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        analyticalscore: true,
        analyticalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        scorereceived: true,
        datafileId: true,
        athome: true,
        greEmail: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async grescore(
    @common.Param() params: GrescoreWhereUniqueInput
  ): Promise<Grescore | null> {
    const result = await this.service.grescore({
      where: params,
      select: {
        applicationId: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        analyticalscore: true,
        analyticalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        scorereceived: true,
        datafileId: true,
        athome: true,
        greEmail: true,
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
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGrescore(
    @common.Param() params: GrescoreWhereUniqueInput,
    @common.Body() data: GrescoreUpdateInput
  ): Promise<Grescore | null> {
    try {
      return await this.service.updateGrescore({
        where: params,
        data: data,
        select: {
          applicationId: true,
          testdate: true,
          verbalscore: true,
          verbalpercentile: true,
          quantitativescore: true,
          quantitativepercentile: true,
          analyticalscore: true,
          analyticalpercentile: true,
          analyticalwritingscore: true,
          analyticalwritingpercentile: true,
          scorereceived: true,
          datafileId: true,
          athome: true,
          greEmail: true,
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
  @swagger.ApiOkResponse({ type: Grescore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGrescore(
    @common.Param() params: GrescoreWhereUniqueInput
  ): Promise<Grescore | null> {
    try {
      return await this.service.deleteGrescore({
        where: params,
        select: {
          applicationId: true,
          testdate: true,
          verbalscore: true,
          verbalpercentile: true,
          quantitativescore: true,
          quantitativepercentile: true,
          analyticalscore: true,
          analyticalpercentile: true,
          analyticalwritingscore: true,
          analyticalwritingpercentile: true,
          scorereceived: true,
          datafileId: true,
          athome: true,
          greEmail: true,
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
