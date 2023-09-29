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
import { ApplicationProgramLetterService } from "../applicationProgramLetter.service";
import { ApplicationProgramLetterCreateInput } from "./ApplicationProgramLetterCreateInput";
import { ApplicationProgramLetterWhereInput } from "./ApplicationProgramLetterWhereInput";
import { ApplicationProgramLetterWhereUniqueInput } from "./ApplicationProgramLetterWhereUniqueInput";
import { ApplicationProgramLetterFindManyArgs } from "./ApplicationProgramLetterFindManyArgs";
import { ApplicationProgramLetterUpdateInput } from "./ApplicationProgramLetterUpdateInput";
import { ApplicationProgramLetter } from "./ApplicationProgramLetter";

export class ApplicationProgramLetterControllerBase {
  constructor(protected readonly service: ApplicationProgramLetterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicationProgramLetter })
  async create(
    @common.Body() data: ApplicationProgramLetterCreateInput
  ): Promise<ApplicationProgramLetter> {
    return await this.service.create({
      data: data,
      select: {
        admitSent: true,
        admitSentDate: true,
        id: true,
        rejectionSent: true,
        rejectionSentDate: true,
        waitlistSent: true,
        waitlistSentDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicationProgramLetter] })
  @ApiNestedQuery(ApplicationProgramLetterFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<ApplicationProgramLetter[]> {
    const args = plainToClass(
      ApplicationProgramLetterFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
      select: {
        admitSent: true,
        admitSentDate: true,
        id: true,
        rejectionSent: true,
        rejectionSentDate: true,
        waitlistSent: true,
        waitlistSentDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicationProgramLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ApplicationProgramLetterWhereUniqueInput
  ): Promise<ApplicationProgramLetter | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        admitSent: true,
        admitSentDate: true,
        id: true,
        rejectionSent: true,
        rejectionSentDate: true,
        waitlistSent: true,
        waitlistSentDate: true,
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
  @swagger.ApiOkResponse({ type: ApplicationProgramLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ApplicationProgramLetterWhereUniqueInput,
    @common.Body() data: ApplicationProgramLetterUpdateInput
  ): Promise<ApplicationProgramLetter | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          admitSent: true,
          admitSentDate: true,
          id: true,
          rejectionSent: true,
          rejectionSentDate: true,
          waitlistSent: true,
          waitlistSentDate: true,
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
  @swagger.ApiOkResponse({ type: ApplicationProgramLetter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ApplicationProgramLetterWhereUniqueInput
  ): Promise<ApplicationProgramLetter | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          admitSent: true,
          admitSentDate: true,
          id: true,
          rejectionSent: true,
          rejectionSentDate: true,
          waitlistSent: true,
          waitlistSentDate: true,
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
