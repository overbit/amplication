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
import { SlateAppsMseReviewedService } from "../slateAppsMseReviewed.service";
import { SlateAppsMseReviewedCreateInput } from "./SlateAppsMseReviewedCreateInput";
import { SlateAppsMseReviewedWhereInput } from "./SlateAppsMseReviewedWhereInput";
import { SlateAppsMseReviewedWhereUniqueInput } from "./SlateAppsMseReviewedWhereUniqueInput";
import { SlateAppsMseReviewedFindManyArgs } from "./SlateAppsMseReviewedFindManyArgs";
import { SlateAppsMseReviewedUpdateInput } from "./SlateAppsMseReviewedUpdateInput";
import { SlateAppsMseReviewed } from "./SlateAppsMseReviewed";

export class SlateAppsMseReviewedControllerBase {
  constructor(protected readonly service: SlateAppsMseReviewedService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateAppsMseReviewed })
  async create(
    @common.Body() data: SlateAppsMseReviewedCreateInput
  ): Promise<SlateAppsMseReviewed> {
    return await this.service.create({
      data: data,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateAppsMseReviewed] })
  @ApiNestedQuery(SlateAppsMseReviewedFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<SlateAppsMseReviewed[]> {
    const args = plainToClass(SlateAppsMseReviewedFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateAppsMseReviewed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: SlateAppsMseReviewedWhereUniqueInput
  ): Promise<SlateAppsMseReviewed | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        applicationStatus: true,
        appSubmittedDate: true,
        birthdate: true,
        citizenshipStatus: true,
        decisionConfirmedExportCode: true,
        email: true,
        emailAddress: true,
        first: true,
        hispanic: true,
        id: true,
        ipedsClassification: true,
        language: true,
        last: true,
        mailingAddressCity: true,
        mailingAddressCountryFipsCode: true,
        mailingAddressCountryIso2Code: true,
        mailingAddressCountryIso3Code: true,
        mailingAddressCountryName: true,
        mailingAddressCountrySisExport: true,
        mailingAddressGeomarket: true,
        mailingAddressPostalCode: true,
        mailingAddressRegion: true,
        mailingAddressStreet1: true,
        mailingAddressStreet2: true,
        mailingAddressStreet3: true,
        mailingAddressValidFromDate: true,
        mailingAddressValidToDate: true,
        middle: true,
        mobilePhoneNumber: true,
        permanentAddressCity: true,
        permanentAddressCountry: true,
        permanentAddressCountryFipsCode: true,
        permanentAddressCountryIso2Code: true,
        permanentAddressCountryIso3Code: true,
        permanentAddressCountrySisExport: true,
        permanentAddressGeomarket: true,
        permanentAddressPostalCode: true,
        permanentAddressRegion: true,
        permanentAddressStreet1: true,
        permanentAddressStreet2: true,
        permanentAddressStreet3: true,
        personalWebSite: true,
        phoneNumber: true,
        prefix: true,
        primaryCitizenship: true,
        race: true,
        reference1Waiver: true,
        reference2Waiver: true,
        reference3Waiver: true,
        roundExportCode: true,
        secondaryCitizenship: true,
        sex: true,
        suffix: true,
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
  @swagger.ApiOkResponse({ type: SlateAppsMseReviewed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: SlateAppsMseReviewedWhereUniqueInput,
    @common.Body() data: SlateAppsMseReviewedUpdateInput
  ): Promise<SlateAppsMseReviewed | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          applicationStatus: true,
          appSubmittedDate: true,
          birthdate: true,
          citizenshipStatus: true,
          decisionConfirmedExportCode: true,
          email: true,
          emailAddress: true,
          first: true,
          hispanic: true,
          id: true,
          ipedsClassification: true,
          language: true,
          last: true,
          mailingAddressCity: true,
          mailingAddressCountryFipsCode: true,
          mailingAddressCountryIso2Code: true,
          mailingAddressCountryIso3Code: true,
          mailingAddressCountryName: true,
          mailingAddressCountrySisExport: true,
          mailingAddressGeomarket: true,
          mailingAddressPostalCode: true,
          mailingAddressRegion: true,
          mailingAddressStreet1: true,
          mailingAddressStreet2: true,
          mailingAddressStreet3: true,
          mailingAddressValidFromDate: true,
          mailingAddressValidToDate: true,
          middle: true,
          mobilePhoneNumber: true,
          permanentAddressCity: true,
          permanentAddressCountry: true,
          permanentAddressCountryFipsCode: true,
          permanentAddressCountryIso2Code: true,
          permanentAddressCountryIso3Code: true,
          permanentAddressCountrySisExport: true,
          permanentAddressGeomarket: true,
          permanentAddressPostalCode: true,
          permanentAddressRegion: true,
          permanentAddressStreet1: true,
          permanentAddressStreet2: true,
          permanentAddressStreet3: true,
          personalWebSite: true,
          phoneNumber: true,
          prefix: true,
          primaryCitizenship: true,
          race: true,
          reference1Waiver: true,
          reference2Waiver: true,
          reference3Waiver: true,
          roundExportCode: true,
          secondaryCitizenship: true,
          sex: true,
          suffix: true,
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
  @swagger.ApiOkResponse({ type: SlateAppsMseReviewed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: SlateAppsMseReviewedWhereUniqueInput
  ): Promise<SlateAppsMseReviewed | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          applicationStatus: true,
          appSubmittedDate: true,
          birthdate: true,
          citizenshipStatus: true,
          decisionConfirmedExportCode: true,
          email: true,
          emailAddress: true,
          first: true,
          hispanic: true,
          id: true,
          ipedsClassification: true,
          language: true,
          last: true,
          mailingAddressCity: true,
          mailingAddressCountryFipsCode: true,
          mailingAddressCountryIso2Code: true,
          mailingAddressCountryIso3Code: true,
          mailingAddressCountryName: true,
          mailingAddressCountrySisExport: true,
          mailingAddressGeomarket: true,
          mailingAddressPostalCode: true,
          mailingAddressRegion: true,
          mailingAddressStreet1: true,
          mailingAddressStreet2: true,
          mailingAddressStreet3: true,
          mailingAddressValidFromDate: true,
          mailingAddressValidToDate: true,
          middle: true,
          mobilePhoneNumber: true,
          permanentAddressCity: true,
          permanentAddressCountry: true,
          permanentAddressCountryFipsCode: true,
          permanentAddressCountryIso2Code: true,
          permanentAddressCountryIso3Code: true,
          permanentAddressCountrySisExport: true,
          permanentAddressGeomarket: true,
          permanentAddressPostalCode: true,
          permanentAddressRegion: true,
          permanentAddressStreet1: true,
          permanentAddressStreet2: true,
          permanentAddressStreet3: true,
          personalWebSite: true,
          phoneNumber: true,
          prefix: true,
          primaryCitizenship: true,
          race: true,
          reference1Waiver: true,
          reference2Waiver: true,
          reference3Waiver: true,
          roundExportCode: true,
          secondaryCitizenship: true,
          sex: true,
          suffix: true,
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
