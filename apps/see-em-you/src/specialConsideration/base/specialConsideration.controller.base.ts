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
import { SpecialConsiderationService } from "../specialConsideration.service";
import { SpecialConsiderationCreateInput } from "./SpecialConsiderationCreateInput";
import { SpecialConsiderationWhereInput } from "./SpecialConsiderationWhereInput";
import { SpecialConsiderationWhereUniqueInput } from "./SpecialConsiderationWhereUniqueInput";
import { SpecialConsiderationFindManyArgs } from "./SpecialConsiderationFindManyArgs";
import { SpecialConsiderationUpdateInput } from "./SpecialConsiderationUpdateInput";
import { SpecialConsideration } from "./SpecialConsideration";

export class SpecialConsiderationControllerBase {
  constructor(protected readonly service: SpecialConsiderationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SpecialConsideration })
  async create(
    @common.Body() data: SpecialConsiderationCreateInput
  ): Promise<SpecialConsideration> {
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

        id: true,
        reviewerId: true,
        specialConsideration: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SpecialConsideration] })
  @ApiNestedQuery(SpecialConsiderationFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<SpecialConsideration[]> {
    const args = plainToClass(SpecialConsiderationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,
        reviewerId: true,
        specialConsideration: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SpecialConsideration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SpecialConsiderationWhereUniqueInput
  ): Promise<SpecialConsideration | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        id: true,
        reviewerId: true,
        specialConsideration: true,
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
  @swagger.ApiOkResponse({ type: SpecialConsideration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SpecialConsiderationWhereUniqueInput,
    @common.Body() data: SpecialConsiderationUpdateInput
  ): Promise<SpecialConsideration | null> {
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

          id: true,
          reviewerId: true,
          specialConsideration: true,
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
  @swagger.ApiOkResponse({ type: SpecialConsideration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SpecialConsiderationWhereUniqueInput
  ): Promise<SpecialConsideration | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          id: true,
          reviewerId: true,
          specialConsideration: true,
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
