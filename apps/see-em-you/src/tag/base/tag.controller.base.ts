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
import { TagService } from "../tag.service";
import { TagCreateInput } from "./TagCreateInput";
import { TagWhereInput } from "./TagWhereInput";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagUpdateInput } from "./TagUpdateInput";
import { Tag } from "./Tag";

export class TagControllerBase {
  constructor(protected readonly service: TagService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tag })
  async create(@common.Body() data: TagCreateInput): Promise<Tag> {
    return await this.service.create({
      data: data,
      select: {
        category: true,
        id: true,
        name: true,
        parent: true,
        sticky: true,
        typeField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tag] })
  @ApiNestedQuery(TagFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Tag[]> {
    const args = plainToClass(TagFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        category: true,
        id: true,
        name: true,
        parent: true,
        sticky: true,
        typeField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: TagWhereUniqueInput
  ): Promise<Tag | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        category: true,
        id: true,
        name: true,
        parent: true,
        sticky: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() data: TagUpdateInput
  ): Promise<Tag | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          category: true,
          id: true,
          name: true,
          parent: true,
          sticky: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: TagWhereUniqueInput
  ): Promise<Tag | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category: true,
          id: true,
          name: true,
          parent: true,
          sticky: true,
          typeField: true,
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
