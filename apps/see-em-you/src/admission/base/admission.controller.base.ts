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
import { AdmissionService } from "../admission.service";
import { AdmissionCreateInput } from "./AdmissionCreateInput";
import { AdmissionWhereInput } from "./AdmissionWhereInput";
import { AdmissionWhereUniqueInput } from "./AdmissionWhereUniqueInput";
import { AdmissionFindManyArgs } from "./AdmissionFindManyArgs";
import { AdmissionUpdateInput } from "./AdmissionUpdateInput";
import { Admission } from "./Admission";

export class AdmissionControllerBase {
  constructor(protected readonly service: AdmissionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Admission })
  async create(@common.Body() data: AdmissionCreateInput): Promise<Admission> {
    return await this.service.create({
      data: data,
      select: {
        applicationId: true,
        code: true,
        id: true,
        programId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Admission] })
  @ApiNestedQuery(AdmissionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Admission[]> {
    const args = plainToClass(AdmissionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationId: true,
        code: true,
        id: true,
        programId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Admission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AdmissionWhereUniqueInput
  ): Promise<Admission | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationId: true,
        code: true,
        id: true,
        programId: true,
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
  @swagger.ApiOkResponse({ type: Admission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AdmissionWhereUniqueInput,
    @common.Body() data: AdmissionUpdateInput
  ): Promise<Admission | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationId: true,
          code: true,
          id: true,
          programId: true,
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
  @swagger.ApiOkResponse({ type: Admission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AdmissionWhereUniqueInput
  ): Promise<Admission | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationId: true,
          code: true,
          id: true,
          programId: true,
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
