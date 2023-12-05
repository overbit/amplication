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
import { PeSlateAppService } from "../peSlateApp.service";
import { PeSlateAppCreateInput } from "./PeSlateAppCreateInput";
import { PeSlateApp } from "./PeSlateApp";
import { PeSlateAppFindManyArgs } from "./PeSlateAppFindManyArgs";
import { PeSlateAppWhereUniqueInput } from "./PeSlateAppWhereUniqueInput";
import { PeSlateAppUpdateInput } from "./PeSlateAppUpdateInput";

export class PeSlateAppControllerBase {
  constructor(protected readonly service: PeSlateAppService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeSlateApp })
  async createPeSlateApp(
    @common.Body() data: PeSlateAppCreateInput
  ): Promise<PeSlateApp> {
    return await this.service.createPeSlateApp({
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
  @swagger.ApiOkResponse({ type: [PeSlateApp] })
  @ApiNestedQuery(PeSlateAppFindManyArgs)
  async peSlateApps(@common.Req() request: Request): Promise<PeSlateApp[]> {
    const args = plainToClass(PeSlateAppFindManyArgs, request.query);
    return this.service.peSlateApps({
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
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async peSlateApp(
    @common.Param() params: PeSlateAppWhereUniqueInput
  ): Promise<PeSlateApp | null> {
    const result = await this.service.peSlateApp({
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
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePeSlateApp(
    @common.Param() params: PeSlateAppWhereUniqueInput,
    @common.Body() data: PeSlateAppUpdateInput
  ): Promise<PeSlateApp | null> {
    try {
      return await this.service.updatePeSlateApp({
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
  @swagger.ApiOkResponse({ type: PeSlateApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePeSlateApp(
    @common.Param() params: PeSlateAppWhereUniqueInput
  ): Promise<PeSlateApp | null> {
    try {
      return await this.service.deletePeSlateApp({
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
