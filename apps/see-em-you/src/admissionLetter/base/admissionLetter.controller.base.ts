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
import { AdmissionLetterService } from "../admissionLetter.service";
import { AdmissionLetterCreateInput } from "./AdmissionLetterCreateInput";
import { AdmissionLetter } from "./AdmissionLetter";
import { AdmissionLetterFindManyArgs } from "./AdmissionLetterFindManyArgs";
import { AdmissionLetterWhereUniqueInput } from "./AdmissionLetterWhereUniqueInput";
import { AdmissionLetterUpdateInput } from "./AdmissionLetterUpdateInput";

export class AdmissionLetterControllerBase {
  constructor(protected readonly service: AdmissionLetterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AdmissionLetter })
  async createAdmissionLetter(
    @common.Body() data: AdmissionLetterCreateInput
  ): Promise<AdmissionLetter> {
    return await this.service.createAdmissionLetter({
      data: data,
      select: {
        applicationId: true,
        departmentId: true,
        id: true,
        sections: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AdmissionLetter] })
  @ApiNestedQuery(AdmissionLetterFindManyArgs)
  async admissionLetters(
    @common.Req() request: Request
  ): Promise<AdmissionLetter[]> {
    const args = plainToClass(AdmissionLetterFindManyArgs, request.query);
    return this.service.admissionLetters({
      ...args,
      select: {
        applicationId: true,
        departmentId: true,
        id: true,
        sections: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AdmissionLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async admissionLetter(
    @common.Param() params: AdmissionLetterWhereUniqueInput
  ): Promise<AdmissionLetter | null> {
    const result = await this.service.admissionLetter({
      where: params,
      select: {
        applicationId: true,
        departmentId: true,
        id: true,
        sections: true,
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
  @swagger.ApiOkResponse({ type: AdmissionLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAdmissionLetter(
    @common.Param() params: AdmissionLetterWhereUniqueInput,
    @common.Body() data: AdmissionLetterUpdateInput
  ): Promise<AdmissionLetter | null> {
    try {
      return await this.service.updateAdmissionLetter({
        where: params,
        data: data,
        select: {
          applicationId: true,
          departmentId: true,
          id: true,
          sections: true,
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
  @swagger.ApiOkResponse({ type: AdmissionLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAdmissionLetter(
    @common.Param() params: AdmissionLetterWhereUniqueInput
  ): Promise<AdmissionLetter | null> {
    try {
      return await this.service.deleteAdmissionLetter({
        where: params,
        select: {
          applicationId: true,
          departmentId: true,
          id: true,
          sections: true,
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
