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
import { IeltsscoreService } from "../ieltsscore.service";
import { IeltsscoreCreateInput } from "./IeltsscoreCreateInput";
import { Ieltsscore } from "./Ieltsscore";
import { IeltsscoreFindManyArgs } from "./IeltsscoreFindManyArgs";
import { IeltsscoreWhereUniqueInput } from "./IeltsscoreWhereUniqueInput";
import { IeltsscoreUpdateInput } from "./IeltsscoreUpdateInput";

export class IeltsscoreControllerBase {
  constructor(protected readonly service: IeltsscoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ieltsscore })
  async createIeltsscore(
    @common.Body() data: IeltsscoreCreateInput
  ): Promise<Ieltsscore> {
    return await this.service.createIeltsscore({
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

        datafileId: true,
        id: true,
        listeningscore: true,
        overallscore: true,
        readingscore: true,
        scorereceived: true,
        speakingscore: true,
        testdate: true,
        testEmail: true,
        writingscore: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ieltsscore] })
  @ApiNestedQuery(IeltsscoreFindManyArgs)
  async ieltsscores(@common.Req() request: Request): Promise<Ieltsscore[]> {
    const args = plainToClass(IeltsscoreFindManyArgs, request.query);
    return this.service.ieltsscores({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        datafileId: true,
        id: true,
        listeningscore: true,
        overallscore: true,
        readingscore: true,
        scorereceived: true,
        speakingscore: true,
        testdate: true,
        testEmail: true,
        writingscore: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ieltsscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ieltsscore(
    @common.Param() params: IeltsscoreWhereUniqueInput
  ): Promise<Ieltsscore | null> {
    const result = await this.service.ieltsscore({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        datafileId: true,
        id: true,
        listeningscore: true,
        overallscore: true,
        readingscore: true,
        scorereceived: true,
        speakingscore: true,
        testdate: true,
        testEmail: true,
        writingscore: true,
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
  @swagger.ApiOkResponse({ type: Ieltsscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIeltsscore(
    @common.Param() params: IeltsscoreWhereUniqueInput,
    @common.Body() data: IeltsscoreUpdateInput
  ): Promise<Ieltsscore | null> {
    try {
      return await this.service.updateIeltsscore({
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

          datafileId: true,
          id: true,
          listeningscore: true,
          overallscore: true,
          readingscore: true,
          scorereceived: true,
          speakingscore: true,
          testdate: true,
          testEmail: true,
          writingscore: true,
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
  @swagger.ApiOkResponse({ type: Ieltsscore })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIeltsscore(
    @common.Param() params: IeltsscoreWhereUniqueInput
  ): Promise<Ieltsscore | null> {
    try {
      return await this.service.deleteIeltsscore({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          datafileId: true,
          id: true,
          listeningscore: true,
          overallscore: true,
          readingscore: true,
          scorereceived: true,
          speakingscore: true,
          testdate: true,
          testEmail: true,
          writingscore: true,
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
