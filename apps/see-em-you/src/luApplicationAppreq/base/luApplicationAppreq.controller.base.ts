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
import { LuApplicationAppreqService } from "../luApplicationAppreq.service";
import { LuApplicationAppreqCreateInput } from "./LuApplicationAppreqCreateInput";
import { LuApplicationAppreq } from "./LuApplicationAppreq";
import { LuApplicationAppreqFindManyArgs } from "./LuApplicationAppreqFindManyArgs";
import { LuApplicationAppreqWhereUniqueInput } from "./LuApplicationAppreqWhereUniqueInput";
import { LuApplicationAppreqUpdateInput } from "./LuApplicationAppreqUpdateInput";

export class LuApplicationAppreqControllerBase {
  constructor(protected readonly service: LuApplicationAppreqService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LuApplicationAppreq })
  async createLuApplicationAppreq(
    @common.Body() data: LuApplicationAppreqCreateInput
  ): Promise<LuApplicationAppreq> {
    return await this.service.createLuApplicationAppreq({
      data: {
        ...data,

        application: {
          connect: data.application,
        },
      },
      select: {
        reqId: true,
        lastModified: true,
        completed: true,

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
  @swagger.ApiOkResponse({ type: [LuApplicationAppreq] })
  @ApiNestedQuery(LuApplicationAppreqFindManyArgs)
  async luApplicationAppreqs(
    @common.Req() request: Request
  ): Promise<LuApplicationAppreq[]> {
    const args = plainToClass(LuApplicationAppreqFindManyArgs, request.query);
    return this.service.luApplicationAppreqs({
      ...args,
      select: {
        reqId: true,
        lastModified: true,
        completed: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationAppreq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async luApplicationAppreq(
    @common.Param() params: LuApplicationAppreqWhereUniqueInput
  ): Promise<LuApplicationAppreq | null> {
    const result = await this.service.luApplicationAppreq({
      where: params,
      select: {
        reqId: true,
        lastModified: true,
        completed: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationAppreq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLuApplicationAppreq(
    @common.Param() params: LuApplicationAppreqWhereUniqueInput,
    @common.Body() data: LuApplicationAppreqUpdateInput
  ): Promise<LuApplicationAppreq | null> {
    try {
      return await this.service.updateLuApplicationAppreq({
        where: params,
        data: {
          ...data,

          application: {
            connect: data.application,
          },
        },
        select: {
          reqId: true,
          lastModified: true,
          completed: true,

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
  @swagger.ApiOkResponse({ type: LuApplicationAppreq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLuApplicationAppreq(
    @common.Param() params: LuApplicationAppreqWhereUniqueInput
  ): Promise<LuApplicationAppreq | null> {
    try {
      return await this.service.deleteLuApplicationAppreq({
        where: params,
        select: {
          reqId: true,
          lastModified: true,
          completed: true,

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
