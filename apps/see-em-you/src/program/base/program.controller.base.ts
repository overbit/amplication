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
import { ProgramService } from "../program.service";
import { ProgramCreateInput } from "./ProgramCreateInput";
import { Program } from "./Program";
import { ProgramFindManyArgs } from "./ProgramFindManyArgs";
import { ProgramWhereUniqueInput } from "./ProgramWhereUniqueInput";
import { ProgramUpdateInput } from "./ProgramUpdateInput";

export class ProgramControllerBase {
  constructor(protected readonly service: ProgramService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Program })
  async createProgram(
    @common.Body() data: ProgramCreateInput
  ): Promise<Program> {
    return await this.service.createProgram({
      data: data,
      select: {
        programTypeId: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Program] })
  @ApiNestedQuery(ProgramFindManyArgs)
  async programs(@common.Req() request: Request): Promise<Program[]> {
    const args = plainToClass(ProgramFindManyArgs, request.query);
    return this.service.programs({
      ...args,
      select: {
        programTypeId: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Program })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async program(
    @common.Param() params: ProgramWhereUniqueInput
  ): Promise<Program | null> {
    const result = await this.service.program({
      where: params,
      select: {
        programTypeId: true,
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
  @swagger.ApiOkResponse({ type: Program })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProgram(
    @common.Param() params: ProgramWhereUniqueInput,
    @common.Body() data: ProgramUpdateInput
  ): Promise<Program | null> {
    try {
      return await this.service.updateProgram({
        where: params,
        data: data,
        select: {
          programTypeId: true,
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
  @swagger.ApiOkResponse({ type: Program })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProgram(
    @common.Param() params: ProgramWhereUniqueInput
  ): Promise<Program | null> {
    try {
      return await this.service.deleteProgram({
        where: params,
        select: {
          programTypeId: true,
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
