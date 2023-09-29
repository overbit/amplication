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
import { RissFundingService } from "../rissFunding.service";
import { RissFundingCreateInput } from "./RissFundingCreateInput";
import { RissFundingWhereInput } from "./RissFundingWhereInput";
import { RissFundingWhereUniqueInput } from "./RissFundingWhereUniqueInput";
import { RissFundingFindManyArgs } from "./RissFundingFindManyArgs";
import { RissFundingUpdateInput } from "./RissFundingUpdateInput";
import { RissFunding } from "./RissFunding";

export class RissFundingControllerBase {
  constructor(protected readonly service: RissFundingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RissFunding })
  async create(
    @common.Body() data: RissFundingCreateInput
  ): Promise<RissFunding> {
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

        directFunding: true,
        externalAmount: true,
        externalFunding: true,
        externalSource: true,
        id: true,
        reuScholarship: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RissFunding] })
  @ApiNestedQuery(RissFundingFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<RissFunding[]> {
    const args = plainToClass(RissFundingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        directFunding: true,
        externalAmount: true,
        externalFunding: true,
        externalSource: true,
        id: true,
        reuScholarship: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RissFunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RissFundingWhereUniqueInput
  ): Promise<RissFunding | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        directFunding: true,
        externalAmount: true,
        externalFunding: true,
        externalSource: true,
        id: true,
        reuScholarship: true,
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
  @swagger.ApiOkResponse({ type: RissFunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RissFundingWhereUniqueInput,
    @common.Body() data: RissFundingUpdateInput
  ): Promise<RissFunding | null> {
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

          directFunding: true,
          externalAmount: true,
          externalFunding: true,
          externalSource: true,
          id: true,
          reuScholarship: true,
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
  @swagger.ApiOkResponse({ type: RissFunding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RissFundingWhereUniqueInput
  ): Promise<RissFunding | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          directFunding: true,
          externalAmount: true,
          externalFunding: true,
          externalSource: true,
          id: true,
          reuScholarship: true,
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
