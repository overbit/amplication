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
import { ScsUserWebisoService } from "../scsUserWebiso.service";
import { ScsUserWebisoCreateInput } from "./ScsUserWebisoCreateInput";
import { ScsUserWebiso } from "./ScsUserWebiso";
import { ScsUserWebisoFindManyArgs } from "./ScsUserWebisoFindManyArgs";
import { ScsUserWebisoWhereUniqueInput } from "./ScsUserWebisoWhereUniqueInput";
import { ScsUserWebisoUpdateInput } from "./ScsUserWebisoUpdateInput";

export class ScsUserWebisoControllerBase {
  constructor(protected readonly service: ScsUserWebisoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScsUserWebiso })
  async createScsUserWebiso(
    @common.Body() data: ScsUserWebisoCreateInput
  ): Promise<ScsUserWebiso> {
    return await this.service.createScsUserWebiso({
      data: data,
      select: {
        scsUserId: true,
        webiso: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScsUserWebiso] })
  @ApiNestedQuery(ScsUserWebisoFindManyArgs)
  async scsUserWebisos(
    @common.Req() request: Request
  ): Promise<ScsUserWebiso[]> {
    const args = plainToClass(ScsUserWebisoFindManyArgs, request.query);
    return this.service.scsUserWebisos({
      ...args,
      select: {
        scsUserId: true,
        webiso: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScsUserWebiso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async scsUserWebiso(
    @common.Param() params: ScsUserWebisoWhereUniqueInput
  ): Promise<ScsUserWebiso | null> {
    const result = await this.service.scsUserWebiso({
      where: params,
      select: {
        scsUserId: true,
        webiso: true,
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
  @swagger.ApiOkResponse({ type: ScsUserWebiso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateScsUserWebiso(
    @common.Param() params: ScsUserWebisoWhereUniqueInput,
    @common.Body() data: ScsUserWebisoUpdateInput
  ): Promise<ScsUserWebiso | null> {
    try {
      return await this.service.updateScsUserWebiso({
        where: params,
        data: data,
        select: {
          scsUserId: true,
          webiso: true,
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
  @swagger.ApiOkResponse({ type: ScsUserWebiso })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteScsUserWebiso(
    @common.Param() params: ScsUserWebisoWhereUniqueInput
  ): Promise<ScsUserWebiso | null> {
    try {
      return await this.service.deleteScsUserWebiso({
        where: params,
        select: {
          scsUserId: true,
          webiso: true,
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
