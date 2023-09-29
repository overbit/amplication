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
import { ApplicantIpedsRaceService } from "../applicantIpedsRace.service";
import { ApplicantIpedsRaceCreateInput } from "./ApplicantIpedsRaceCreateInput";
import { ApplicantIpedsRaceWhereInput } from "./ApplicantIpedsRaceWhereInput";
import { ApplicantIpedsRaceWhereUniqueInput } from "./ApplicantIpedsRaceWhereUniqueInput";
import { ApplicantIpedsRaceFindManyArgs } from "./ApplicantIpedsRaceFindManyArgs";
import { ApplicantIpedsRaceUpdateInput } from "./ApplicantIpedsRaceUpdateInput";
import { ApplicantIpedsRace } from "./ApplicantIpedsRace";

export class ApplicantIpedsRaceControllerBase {
  constructor(protected readonly service: ApplicantIpedsRaceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicantIpedsRace })
  async create(
    @common.Body() data: ApplicantIpedsRaceCreateInput
  ): Promise<ApplicantIpedsRace> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        ipedsRaceId: true,
        luUsersUsertypesId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicantIpedsRace] })
  @ApiNestedQuery(ApplicantIpedsRaceFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<ApplicantIpedsRace[]> {
    const args = plainToClass(ApplicantIpedsRaceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        ipedsRaceId: true,
        luUsersUsertypesId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicantIpedsRace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ApplicantIpedsRaceWhereUniqueInput
  ): Promise<ApplicantIpedsRace | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        ipedsRaceId: true,
        luUsersUsertypesId: true,
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
  @swagger.ApiOkResponse({ type: ApplicantIpedsRace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ApplicantIpedsRaceWhereUniqueInput,
    @common.Body() data: ApplicantIpedsRaceUpdateInput
  ): Promise<ApplicantIpedsRace | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          ipedsRaceId: true,
          luUsersUsertypesId: true,
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
  @swagger.ApiOkResponse({ type: ApplicantIpedsRace })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ApplicantIpedsRaceWhereUniqueInput
  ): Promise<ApplicantIpedsRace | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          ipedsRaceId: true,
          luUsersUsertypesId: true,
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
