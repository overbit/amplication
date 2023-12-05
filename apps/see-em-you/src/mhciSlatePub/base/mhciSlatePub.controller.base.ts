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
import { MhciSlatePubService } from "../mhciSlatePub.service";
import { MhciSlatePubCreateInput } from "./MhciSlatePubCreateInput";
import { MhciSlatePub } from "./MhciSlatePub";
import { MhciSlatePubFindManyArgs } from "./MhciSlatePubFindManyArgs";
import { MhciSlatePubWhereUniqueInput } from "./MhciSlatePubWhereUniqueInput";
import { MhciSlatePubUpdateInput } from "./MhciSlatePubUpdateInput";

export class MhciSlatePubControllerBase {
  constructor(protected readonly service: MhciSlatePubService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MhciSlatePub })
  async createMhciSlatePub(
    @common.Body() data: MhciSlatePubCreateInput
  ): Promise<MhciSlatePub> {
    return await this.service.createMhciSlatePub({
      data: data,
      select: {
        authorsPub1: true,
        authorsPub2: true,
        authorsPub3: true,
        authorsPub4: true,
        authorsPub5: true,
        authorsPub6: true,
        citationPub1: true,
        citationPub2: true,
        citationPub3: true,
        citationPub4: true,
        citationPub5: true,
        citationPub6: true,
        destinationPub1: true,
        destinationPub2: true,
        destinationPub3: true,
        destinationPub4: true,
        destinationPub5: true,
        destinationPub6: true,
        first: true,
        hasPublications: true,
        id: true,
        last: true,
        middle: true,
        otherTypeOfPublication1: true,
        otherTypeOfPublication2: true,
        otherTypeOfPublication3: true,
        otherTypeOfPublication4: true,
        otherTypeOfPublication5: true,
        otherTypeOfPublication6: true,
        prefix: true,
        statusOfPublication1: true,
        statusOfPublication2: true,
        statusOfPublication3: true,
        statusOfPublication4: true,
        statusOfPublication5: true,
        statusOfPublication6: true,
        titlePub1: true,
        titlePub2: true,
        titlePub3: true,
        titlePub4: true,
        titlePub5: true,
        titlePub6: true,
        typeOfPublication1: true,
        typeOfPublication2: true,
        typeOfPublication3: true,
        typeOfPublication4: true,
        typeOfPublication5: true,
        typeOfPublication6: true,
        urlPub1: true,
        urlPub2: true,
        urlPub3: true,
        urlPub4: true,
        urlPub5: true,
        urlPub6: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MhciSlatePub] })
  @ApiNestedQuery(MhciSlatePubFindManyArgs)
  async mhciSlatePubs(@common.Req() request: Request): Promise<MhciSlatePub[]> {
    const args = plainToClass(MhciSlatePubFindManyArgs, request.query);
    return this.service.mhciSlatePubs({
      ...args,
      select: {
        authorsPub1: true,
        authorsPub2: true,
        authorsPub3: true,
        authorsPub4: true,
        authorsPub5: true,
        authorsPub6: true,
        citationPub1: true,
        citationPub2: true,
        citationPub3: true,
        citationPub4: true,
        citationPub5: true,
        citationPub6: true,
        destinationPub1: true,
        destinationPub2: true,
        destinationPub3: true,
        destinationPub4: true,
        destinationPub5: true,
        destinationPub6: true,
        first: true,
        hasPublications: true,
        id: true,
        last: true,
        middle: true,
        otherTypeOfPublication1: true,
        otherTypeOfPublication2: true,
        otherTypeOfPublication3: true,
        otherTypeOfPublication4: true,
        otherTypeOfPublication5: true,
        otherTypeOfPublication6: true,
        prefix: true,
        statusOfPublication1: true,
        statusOfPublication2: true,
        statusOfPublication3: true,
        statusOfPublication4: true,
        statusOfPublication5: true,
        statusOfPublication6: true,
        titlePub1: true,
        titlePub2: true,
        titlePub3: true,
        titlePub4: true,
        titlePub5: true,
        titlePub6: true,
        typeOfPublication1: true,
        typeOfPublication2: true,
        typeOfPublication3: true,
        typeOfPublication4: true,
        typeOfPublication5: true,
        typeOfPublication6: true,
        urlPub1: true,
        urlPub2: true,
        urlPub3: true,
        urlPub4: true,
        urlPub5: true,
        urlPub6: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MhciSlatePub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mhciSlatePub(
    @common.Param() params: MhciSlatePubWhereUniqueInput
  ): Promise<MhciSlatePub | null> {
    const result = await this.service.mhciSlatePub({
      where: params,
      select: {
        authorsPub1: true,
        authorsPub2: true,
        authorsPub3: true,
        authorsPub4: true,
        authorsPub5: true,
        authorsPub6: true,
        citationPub1: true,
        citationPub2: true,
        citationPub3: true,
        citationPub4: true,
        citationPub5: true,
        citationPub6: true,
        destinationPub1: true,
        destinationPub2: true,
        destinationPub3: true,
        destinationPub4: true,
        destinationPub5: true,
        destinationPub6: true,
        first: true,
        hasPublications: true,
        id: true,
        last: true,
        middle: true,
        otherTypeOfPublication1: true,
        otherTypeOfPublication2: true,
        otherTypeOfPublication3: true,
        otherTypeOfPublication4: true,
        otherTypeOfPublication5: true,
        otherTypeOfPublication6: true,
        prefix: true,
        statusOfPublication1: true,
        statusOfPublication2: true,
        statusOfPublication3: true,
        statusOfPublication4: true,
        statusOfPublication5: true,
        statusOfPublication6: true,
        titlePub1: true,
        titlePub2: true,
        titlePub3: true,
        titlePub4: true,
        titlePub5: true,
        titlePub6: true,
        typeOfPublication1: true,
        typeOfPublication2: true,
        typeOfPublication3: true,
        typeOfPublication4: true,
        typeOfPublication5: true,
        typeOfPublication6: true,
        urlPub1: true,
        urlPub2: true,
        urlPub3: true,
        urlPub4: true,
        urlPub5: true,
        urlPub6: true,
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
  @swagger.ApiOkResponse({ type: MhciSlatePub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMhciSlatePub(
    @common.Param() params: MhciSlatePubWhereUniqueInput,
    @common.Body() data: MhciSlatePubUpdateInput
  ): Promise<MhciSlatePub | null> {
    try {
      return await this.service.updateMhciSlatePub({
        where: params,
        data: data,
        select: {
          authorsPub1: true,
          authorsPub2: true,
          authorsPub3: true,
          authorsPub4: true,
          authorsPub5: true,
          authorsPub6: true,
          citationPub1: true,
          citationPub2: true,
          citationPub3: true,
          citationPub4: true,
          citationPub5: true,
          citationPub6: true,
          destinationPub1: true,
          destinationPub2: true,
          destinationPub3: true,
          destinationPub4: true,
          destinationPub5: true,
          destinationPub6: true,
          first: true,
          hasPublications: true,
          id: true,
          last: true,
          middle: true,
          otherTypeOfPublication1: true,
          otherTypeOfPublication2: true,
          otherTypeOfPublication3: true,
          otherTypeOfPublication4: true,
          otherTypeOfPublication5: true,
          otherTypeOfPublication6: true,
          prefix: true,
          statusOfPublication1: true,
          statusOfPublication2: true,
          statusOfPublication3: true,
          statusOfPublication4: true,
          statusOfPublication5: true,
          statusOfPublication6: true,
          titlePub1: true,
          titlePub2: true,
          titlePub3: true,
          titlePub4: true,
          titlePub5: true,
          titlePub6: true,
          typeOfPublication1: true,
          typeOfPublication2: true,
          typeOfPublication3: true,
          typeOfPublication4: true,
          typeOfPublication5: true,
          typeOfPublication6: true,
          urlPub1: true,
          urlPub2: true,
          urlPub3: true,
          urlPub4: true,
          urlPub5: true,
          urlPub6: true,
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
  @swagger.ApiOkResponse({ type: MhciSlatePub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMhciSlatePub(
    @common.Param() params: MhciSlatePubWhereUniqueInput
  ): Promise<MhciSlatePub | null> {
    try {
      return await this.service.deleteMhciSlatePub({
        where: params,
        select: {
          authorsPub1: true,
          authorsPub2: true,
          authorsPub3: true,
          authorsPub4: true,
          authorsPub5: true,
          authorsPub6: true,
          citationPub1: true,
          citationPub2: true,
          citationPub3: true,
          citationPub4: true,
          citationPub5: true,
          citationPub6: true,
          destinationPub1: true,
          destinationPub2: true,
          destinationPub3: true,
          destinationPub4: true,
          destinationPub5: true,
          destinationPub6: true,
          first: true,
          hasPublications: true,
          id: true,
          last: true,
          middle: true,
          otherTypeOfPublication1: true,
          otherTypeOfPublication2: true,
          otherTypeOfPublication3: true,
          otherTypeOfPublication4: true,
          otherTypeOfPublication5: true,
          otherTypeOfPublication6: true,
          prefix: true,
          statusOfPublication1: true,
          statusOfPublication2: true,
          statusOfPublication3: true,
          statusOfPublication4: true,
          statusOfPublication5: true,
          statusOfPublication6: true,
          titlePub1: true,
          titlePub2: true,
          titlePub3: true,
          titlePub4: true,
          titlePub5: true,
          titlePub6: true,
          typeOfPublication1: true,
          typeOfPublication2: true,
          typeOfPublication3: true,
          typeOfPublication4: true,
          typeOfPublication5: true,
          typeOfPublication6: true,
          urlPub1: true,
          urlPub2: true,
          urlPub3: true,
          urlPub4: true,
          urlPub5: true,
          urlPub6: true,
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
