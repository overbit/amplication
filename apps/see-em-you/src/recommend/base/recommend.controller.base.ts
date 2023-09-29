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
import { RecommendService } from "../recommend.service";
import { RecommendCreateInput } from "./RecommendCreateInput";
import { RecommendWhereInput } from "./RecommendWhereInput";
import { RecommendWhereUniqueInput } from "./RecommendWhereUniqueInput";
import { RecommendFindManyArgs } from "./RecommendFindManyArgs";
import { RecommendUpdateInput } from "./RecommendUpdateInput";
import { Recommend } from "./Recommend";

export class RecommendControllerBase {
  constructor(protected readonly service: RecommendService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recommend })
  async create(@common.Body() data: RecommendCreateInput): Promise<Recommend> {
    return await this.service.create({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        buckleyatupload: true,
        cmuAffiliation: true,
        content: true,
        datafileId: true,
        id: true,
        lastReminderSent: true,
        recommendtype: true,
        recUserId: true,
        reminderSentCount: true,
        submitted: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Recommend] })
  @ApiNestedQuery(RecommendFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Recommend[]> {
    const args = plainToClass(RecommendFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        buckleyatupload: true,
        cmuAffiliation: true,
        content: true,
        datafileId: true,
        id: true,
        lastReminderSent: true,
        recommendtype: true,
        recUserId: true,
        reminderSentCount: true,
        submitted: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recommend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RecommendWhereUniqueInput
  ): Promise<Recommend | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        buckleyatupload: true,
        cmuAffiliation: true,
        content: true,
        datafileId: true,
        id: true,
        lastReminderSent: true,
        recommendtype: true,
        recUserId: true,
        reminderSentCount: true,
        submitted: true,
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
  @swagger.ApiOkResponse({ type: Recommend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RecommendWhereUniqueInput,
    @common.Body() data: RecommendUpdateInput
  ): Promise<Recommend | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          buckleyatupload: true,
          cmuAffiliation: true,
          content: true,
          datafileId: true,
          id: true,
          lastReminderSent: true,
          recommendtype: true,
          recUserId: true,
          reminderSentCount: true,
          submitted: true,
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
  @swagger.ApiOkResponse({ type: Recommend })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RecommendWhereUniqueInput
  ): Promise<Recommend | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          buckleyatupload: true,
          cmuAffiliation: true,
          content: true,
          datafileId: true,
          id: true,
          lastReminderSent: true,
          recommendtype: true,
          recUserId: true,
          reminderSentCount: true,
          submitted: true,
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
