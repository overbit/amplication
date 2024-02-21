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
import { ProgramGroupTypeService } from "../programGroupType.service";
import { ProgramGroupTypeCreateInput } from "./ProgramGroupTypeCreateInput";
import { ProgramGroupType } from "./ProgramGroupType";
import { ProgramGroupTypeFindManyArgs } from "./ProgramGroupTypeFindManyArgs";
import { ProgramGroupTypeWhereUniqueInput } from "./ProgramGroupTypeWhereUniqueInput";
import { ProgramGroupTypeUpdateInput } from "./ProgramGroupTypeUpdateInput";

export class ProgramGroupTypeControllerBase {
  constructor(protected readonly service: ProgramGroupTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProgramGroupType })
  async createProgramGroupType(
    @common.Body() data: ProgramGroupTypeCreateInput
  ): Promise<ProgramGroupType> {
    return await this.service.createProgramGroupType({
      data: data,
      select: {
        programGroupTypeName: true,
        programGroupTypeDescription: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProgramGroupType] })
  @ApiNestedQuery(ProgramGroupTypeFindManyArgs)
  async programGroupTypes(
    @common.Req() request: Request
  ): Promise<ProgramGroupType[]> {
    const args = plainToClass(ProgramGroupTypeFindManyArgs, request.query);
    return this.service.programGroupTypes({
      ...args,
      select: {
        programGroupTypeName: true,
        programGroupTypeDescription: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProgramGroupType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async programGroupType(
    @common.Param() params: ProgramGroupTypeWhereUniqueInput
  ): Promise<ProgramGroupType | null> {
    const result = await this.service.programGroupType({
      where: params,
      select: {
        programGroupTypeName: true,
        programGroupTypeDescription: true,
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
  @swagger.ApiOkResponse({ type: ProgramGroupType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgramGroupType(
    @common.Param() params: ProgramGroupTypeWhereUniqueInput,
    @common.Body() data: ProgramGroupTypeUpdateInput
  ): Promise<ProgramGroupType | null> {
    try {
      return await this.service.updateProgramGroupType({
        where: params,
        data: data,
        select: {
          programGroupTypeName: true,
          programGroupTypeDescription: true,
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
  @swagger.ApiOkResponse({ type: ProgramGroupType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgramGroupType(
    @common.Param() params: ProgramGroupTypeWhereUniqueInput
  ): Promise<ProgramGroupType | null> {
    try {
      return await this.service.deleteProgramGroupType({
        where: params,
        select: {
          programGroupTypeName: true,
          programGroupTypeDescription: true,
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
