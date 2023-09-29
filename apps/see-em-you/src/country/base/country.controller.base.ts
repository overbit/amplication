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
import { CountryService } from "../country.service";
import { CountryCreateInput } from "./CountryCreateInput";
import { CountryWhereInput } from "./CountryWhereInput";
import { CountryWhereUniqueInput } from "./CountryWhereUniqueInput";
import { CountryFindManyArgs } from "./CountryFindManyArgs";
import { CountryUpdateInput } from "./CountryUpdateInput";
import { Country } from "./Country";

export class CountryControllerBase {
  constructor(protected readonly service: CountryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Country })
  async create(@common.Body() data: CountryCreateInput): Promise<Country> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        isoCode: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Country] })
  @ApiNestedQuery(CountryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Country[]> {
    const args = plainToClass(CountryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        isoCode: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        isoCode: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CountryWhereUniqueInput,
    @common.Body() data: CountryUpdateInput
  ): Promise<Country | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          isoCode: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Country })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CountryWhereUniqueInput
  ): Promise<Country | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          isoCode: true,
          name: true,
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
