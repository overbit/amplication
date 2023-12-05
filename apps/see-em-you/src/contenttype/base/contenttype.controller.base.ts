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
import { ContenttypeService } from "../contenttype.service";
import { ContenttypeCreateInput } from "./ContenttypeCreateInput";
import { Contenttype } from "./Contenttype";
import { ContenttypeFindManyArgs } from "./ContenttypeFindManyArgs";
import { ContenttypeWhereUniqueInput } from "./ContenttypeWhereUniqueInput";
import { ContenttypeUpdateInput } from "./ContenttypeUpdateInput";

export class ContenttypeControllerBase {
  constructor(protected readonly service: ContenttypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contenttype })
  async createContenttype(
    @common.Body() data: ContenttypeCreateInput
  ): Promise<Contenttype> {
    return await this.service.createContenttype({
      data: data,
      select: {
        id: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Contenttype] })
  @ApiNestedQuery(ContenttypeFindManyArgs)
  async contenttypes(@common.Req() request: Request): Promise<Contenttype[]> {
    const args = plainToClass(ContenttypeFindManyArgs, request.query);
    return this.service.contenttypes({
      ...args,
      select: {
        id: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contenttype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contenttype(
    @common.Param() params: ContenttypeWhereUniqueInput
  ): Promise<Contenttype | null> {
    const result = await this.service.contenttype({
      where: params,
      select: {
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Contenttype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContenttype(
    @common.Param() params: ContenttypeWhereUniqueInput,
    @common.Body() data: ContenttypeUpdateInput
  ): Promise<Contenttype | null> {
    try {
      return await this.service.updateContenttype({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Contenttype })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContenttype(
    @common.Param() params: ContenttypeWhereUniqueInput
  ): Promise<Contenttype | null> {
    try {
      return await this.service.deleteContenttype({
        where: params,
        select: {
          id: true,
          name: true,
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
