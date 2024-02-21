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
import { MseAqaService } from "../mseAqa.service";
import { MseAqaCreateInput } from "./MseAqaCreateInput";
import { MseAqa } from "./MseAqa";
import { MseAqaFindManyArgs } from "./MseAqaFindManyArgs";
import { MseAqaWhereUniqueInput } from "./MseAqaWhereUniqueInput";
import { MseAqaUpdateInput } from "./MseAqaUpdateInput";

export class MseAqaControllerBase {
  constructor(protected readonly service: MseAqaService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MseAqa })
  async createMseAqa(@common.Body() data: MseAqaCreateInput): Promise<MseAqa> {
    return await this.service.createMseAqa({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        reviewerId: true,
        englishComments: true,
        programmingComments: true,
        foundationalComments: true,
        maturityComments: true,
        understandingComments: true,
        experienceComments: true,
        englishRating: true,
        programmingRating: true,
        foundationalRating: true,
        maturityRating: true,
        understandingRating: true,
        experienceRating: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MseAqa] })
  @ApiNestedQuery(MseAqaFindManyArgs)
  async mseAqas(@common.Req() request: Request): Promise<MseAqa[]> {
    const args = plainToClass(MseAqaFindManyArgs, request.query);
    return this.service.mseAqas({
      ...args,
      select: {
        reviewerId: true,
        englishComments: true,
        programmingComments: true,
        foundationalComments: true,
        maturityComments: true,
        understandingComments: true,
        experienceComments: true,
        englishRating: true,
        programmingRating: true,
        foundationalRating: true,
        maturityRating: true,
        understandingRating: true,
        experienceRating: true,

        application: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MseAqa })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mseAqa(
    @common.Param() params: MseAqaWhereUniqueInput
  ): Promise<MseAqa | null> {
    const result = await this.service.mseAqa({
      where: params,
      select: {
        reviewerId: true,
        englishComments: true,
        programmingComments: true,
        foundationalComments: true,
        maturityComments: true,
        understandingComments: true,
        experienceComments: true,
        englishRating: true,
        programmingRating: true,
        foundationalRating: true,
        maturityRating: true,
        understandingRating: true,
        experienceRating: true,

        application: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: MseAqa })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMseAqa(
    @common.Param() params: MseAqaWhereUniqueInput,
    @common.Body() data: MseAqaUpdateInput
  ): Promise<MseAqa | null> {
    try {
      return await this.service.updateMseAqa({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          reviewerId: true,
          englishComments: true,
          programmingComments: true,
          foundationalComments: true,
          maturityComments: true,
          understandingComments: true,
          experienceComments: true,
          englishRating: true,
          programmingRating: true,
          foundationalRating: true,
          maturityRating: true,
          understandingRating: true,
          experienceRating: true,

          application: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: MseAqa })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMseAqa(
    @common.Param() params: MseAqaWhereUniqueInput
  ): Promise<MseAqa | null> {
    try {
      return await this.service.deleteMseAqa({
        where: params,
        select: {
          reviewerId: true,
          englishComments: true,
          programmingComments: true,
          foundationalComments: true,
          maturityComments: true,
          understandingComments: true,
          experienceComments: true,
          englishRating: true,
          programmingRating: true,
          foundationalRating: true,
          maturityRating: true,
          understandingRating: true,
          experienceRating: true,

          application: {
            select: {
              id: true,
            },
          },

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
