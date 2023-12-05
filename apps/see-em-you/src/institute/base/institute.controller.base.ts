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
import { InstituteService } from "../institute.service";
import { InstituteCreateInput } from "./InstituteCreateInput";
import { Institute } from "./Institute";
import { InstituteFindManyArgs } from "./InstituteFindManyArgs";
import { InstituteWhereUniqueInput } from "./InstituteWhereUniqueInput";
import { InstituteUpdateInput } from "./InstituteUpdateInput";

export class InstituteControllerBase {
  constructor(protected readonly service: InstituteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Institute })
  async createInstitute(
    @common.Body() data: InstituteCreateInput
  ): Promise<Institute> {
    return await this.service.createInstitute({
      data: data,
      select: {
        hide: true,
        id: true,
        name: true,
        usersId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Institute] })
  @ApiNestedQuery(InstituteFindManyArgs)
  async institutes(@common.Req() request: Request): Promise<Institute[]> {
    const args = plainToClass(InstituteFindManyArgs, request.query);
    return this.service.institutes({
      ...args,
      select: {
        hide: true,
        id: true,
        name: true,
        usersId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Institute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async institute(
    @common.Param() params: InstituteWhereUniqueInput
  ): Promise<Institute | null> {
    const result = await this.service.institute({
      where: params,
      select: {
        hide: true,
        id: true,
        name: true,
        usersId: true,
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
  @swagger.ApiOkResponse({ type: Institute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInstitute(
    @common.Param() params: InstituteWhereUniqueInput,
    @common.Body() data: InstituteUpdateInput
  ): Promise<Institute | null> {
    try {
      return await this.service.updateInstitute({
        where: params,
        data: data,
        select: {
          hide: true,
          id: true,
          name: true,
          usersId: true,
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
  @swagger.ApiOkResponse({ type: Institute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInstitute(
    @common.Param() params: InstituteWhereUniqueInput
  ): Promise<Institute | null> {
    try {
      return await this.service.deleteInstitute({
        where: params,
        select: {
          hide: true,
          id: true,
          name: true,
          usersId: true,
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
