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
import { JiravoteService } from "../jiravote.service";
import { JiravoteCreateInput } from "./JiravoteCreateInput";
import { JiravoteWhereInput } from "./JiravoteWhereInput";
import { JiravoteWhereUniqueInput } from "./JiravoteWhereUniqueInput";
import { JiravoteFindManyArgs } from "./JiravoteFindManyArgs";
import { JiravoteUpdateInput } from "./JiravoteUpdateInput";
import { Jiravote } from "./Jiravote";

export class JiravoteControllerBase {
  constructor(protected readonly service: JiravoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Jiravote })
  async create(@common.Body() data: JiravoteCreateInput): Promise<Jiravote> {
    return await this.service.create({
      data: data,
      select: {
        created: true,
        id: true,
        jiraName: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Jiravote] })
  @ApiNestedQuery(JiravoteFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Jiravote[]> {
    const args = plainToClass(JiravoteFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        created: true,
        id: true,
        jiraName: true,
        updatedAt: true,
        user: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Jiravote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: JiravoteWhereUniqueInput
  ): Promise<Jiravote | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        created: true,
        id: true,
        jiraName: true,
        updatedAt: true,
        user: true,
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
  @swagger.ApiOkResponse({ type: Jiravote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: JiravoteWhereUniqueInput,
    @common.Body() data: JiravoteUpdateInput
  ): Promise<Jiravote | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          created: true,
          id: true,
          jiraName: true,
          updatedAt: true,
          user: true,
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
  @swagger.ApiOkResponse({ type: Jiravote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: JiravoteWhereUniqueInput
  ): Promise<Jiravote | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          created: true,
          id: true,
          jiraName: true,
          updatedAt: true,
          user: true,
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
