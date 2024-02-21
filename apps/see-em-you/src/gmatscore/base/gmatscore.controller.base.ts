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
import { GmatscoreService } from "../gmatscore.service";
import { GmatscoreCreateInput } from "./GmatscoreCreateInput";
import { Gmatscore } from "./Gmatscore";
import { GmatscoreFindManyArgs } from "./GmatscoreFindManyArgs";
import { GmatscoreWhereUniqueInput } from "./GmatscoreWhereUniqueInput";
import { GmatscoreUpdateInput } from "./GmatscoreUpdateInput";

export class GmatscoreControllerBase {
  constructor(protected readonly service: GmatscoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Gmatscore })
  async createGmatscore(
    @common.Body() data: GmatscoreCreateInput
  ): Promise<Gmatscore> {
    return await this.service.createGmatscore({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        scorereceived: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        totalscore: true,
        totalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        datafileId: true,

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
  @swagger.ApiOkResponse({ type: [Gmatscore] })
  @ApiNestedQuery(GmatscoreFindManyArgs)
  async gmatscores(@common.Req() request: Request): Promise<Gmatscore[]> {
    const args = plainToClass(GmatscoreFindManyArgs, request.query);
    return this.service.gmatscores({
      ...args,
      select: {
        scorereceived: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        totalscore: true,
        totalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        datafileId: true,

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
  @swagger.ApiOkResponse({ type: Gmatscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gmatscore(
    @common.Param() params: GmatscoreWhereUniqueInput
  ): Promise<Gmatscore | null> {
    const result = await this.service.gmatscore({
      where: params,
      select: {
        scorereceived: true,
        testdate: true,
        verbalscore: true,
        verbalpercentile: true,
        quantitativescore: true,
        quantitativepercentile: true,
        totalscore: true,
        totalpercentile: true,
        analyticalwritingscore: true,
        analyticalwritingpercentile: true,
        datafileId: true,

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
  @swagger.ApiOkResponse({ type: Gmatscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGmatscore(
    @common.Param() params: GmatscoreWhereUniqueInput,
    @common.Body() data: GmatscoreUpdateInput
  ): Promise<Gmatscore | null> {
    try {
      return await this.service.updateGmatscore({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          scorereceived: true,
          testdate: true,
          verbalscore: true,
          verbalpercentile: true,
          quantitativescore: true,
          quantitativepercentile: true,
          totalscore: true,
          totalpercentile: true,
          analyticalwritingscore: true,
          analyticalwritingpercentile: true,
          datafileId: true,

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
  @swagger.ApiOkResponse({ type: Gmatscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGmatscore(
    @common.Param() params: GmatscoreWhereUniqueInput
  ): Promise<Gmatscore | null> {
    try {
      return await this.service.deleteGmatscore({
        where: params,
        select: {
          scorereceived: true,
          testdate: true,
          verbalscore: true,
          verbalpercentile: true,
          quantitativescore: true,
          quantitativepercentile: true,
          totalscore: true,
          totalpercentile: true,
          analyticalwritingscore: true,
          analyticalwritingpercentile: true,
          datafileId: true,

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
