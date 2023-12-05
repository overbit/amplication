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
import { UsersInfoService } from "../usersInfo.service";
import { UsersInfoCreateInput } from "./UsersInfoCreateInput";
import { UsersInfo } from "./UsersInfo";
import { UsersInfoFindManyArgs } from "./UsersInfoFindManyArgs";
import { UsersInfoWhereUniqueInput } from "./UsersInfoWhereUniqueInput";
import { UsersInfoUpdateInput } from "./UsersInfoUpdateInput";

export class UsersInfoControllerBase {
  constructor(protected readonly service: UsersInfoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UsersInfo })
  async createUsersInfo(
    @common.Body() data: UsersInfoCreateInput
  ): Promise<UsersInfo> {
    return await this.service.createUsersInfo({
      data: data,
      select: {
        additionalinfo: true,
        addressCurCity: true,
        addressCurCountry: true,
        addressCurPcode: true,
        addressCurState: true,
        addressCurStreet1: true,
        addressCurStreet2: true,
        addressCurStreet3: true,
        addressCurStreet4: true,
        addressCurTel: true,
        addressCurTelMobile: true,
        addressCurTelWork: true,
        addressPermCity: true,
        addressPermCountry: true,
        addressPermPcode: true,
        addressPermState: true,
        addressPermStreet1: true,
        addressPermStreet2: true,
        addressPermStreet3: true,
        addressPermStreet4: true,
        addressPermTel: true,
        addressPermTelMobile: true,
        addressPermTelWork: true,
        buckleyWaive: true,
        citCountry: true,
        citCountrySecond: true,
        company: true,
        curPaRes: true,
        dob: true,
        ethnicity: true,
        firstGenGrad: true,
        firstGenUgrad: true,
        gender: true,
        homepage: true,
        id: true,
        nativeTongue: true,
        qqNumber: true,
        selfGender: true,
        selfGenderOther: true,
        usCitizenOrPermanentResident: true,
        userId: true,
        usPerm: true,
        visastatus: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UsersInfo] })
  @ApiNestedQuery(UsersInfoFindManyArgs)
  async usersInfos(@common.Req() request: Request): Promise<UsersInfo[]> {
    const args = plainToClass(UsersInfoFindManyArgs, request.query);
    return this.service.usersInfos({
      ...args,
      select: {
        additionalinfo: true,
        addressCurCity: true,
        addressCurCountry: true,
        addressCurPcode: true,
        addressCurState: true,
        addressCurStreet1: true,
        addressCurStreet2: true,
        addressCurStreet3: true,
        addressCurStreet4: true,
        addressCurTel: true,
        addressCurTelMobile: true,
        addressCurTelWork: true,
        addressPermCity: true,
        addressPermCountry: true,
        addressPermPcode: true,
        addressPermState: true,
        addressPermStreet1: true,
        addressPermStreet2: true,
        addressPermStreet3: true,
        addressPermStreet4: true,
        addressPermTel: true,
        addressPermTelMobile: true,
        addressPermTelWork: true,
        buckleyWaive: true,
        citCountry: true,
        citCountrySecond: true,
        company: true,
        curPaRes: true,
        dob: true,
        ethnicity: true,
        firstGenGrad: true,
        firstGenUgrad: true,
        gender: true,
        homepage: true,
        id: true,
        nativeTongue: true,
        qqNumber: true,
        selfGender: true,
        selfGenderOther: true,
        usCitizenOrPermanentResident: true,
        userId: true,
        usPerm: true,
        visastatus: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UsersInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async usersInfo(
    @common.Param() params: UsersInfoWhereUniqueInput
  ): Promise<UsersInfo | null> {
    const result = await this.service.usersInfo({
      where: params,
      select: {
        additionalinfo: true,
        addressCurCity: true,
        addressCurCountry: true,
        addressCurPcode: true,
        addressCurState: true,
        addressCurStreet1: true,
        addressCurStreet2: true,
        addressCurStreet3: true,
        addressCurStreet4: true,
        addressCurTel: true,
        addressCurTelMobile: true,
        addressCurTelWork: true,
        addressPermCity: true,
        addressPermCountry: true,
        addressPermPcode: true,
        addressPermState: true,
        addressPermStreet1: true,
        addressPermStreet2: true,
        addressPermStreet3: true,
        addressPermStreet4: true,
        addressPermTel: true,
        addressPermTelMobile: true,
        addressPermTelWork: true,
        buckleyWaive: true,
        citCountry: true,
        citCountrySecond: true,
        company: true,
        curPaRes: true,
        dob: true,
        ethnicity: true,
        firstGenGrad: true,
        firstGenUgrad: true,
        gender: true,
        homepage: true,
        id: true,
        nativeTongue: true,
        qqNumber: true,
        selfGender: true,
        selfGenderOther: true,
        usCitizenOrPermanentResident: true,
        userId: true,
        usPerm: true,
        visastatus: true,
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
  @swagger.ApiOkResponse({ type: UsersInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsersInfo(
    @common.Param() params: UsersInfoWhereUniqueInput,
    @common.Body() data: UsersInfoUpdateInput
  ): Promise<UsersInfo | null> {
    try {
      return await this.service.updateUsersInfo({
        where: params,
        data: data,
        select: {
          additionalinfo: true,
          addressCurCity: true,
          addressCurCountry: true,
          addressCurPcode: true,
          addressCurState: true,
          addressCurStreet1: true,
          addressCurStreet2: true,
          addressCurStreet3: true,
          addressCurStreet4: true,
          addressCurTel: true,
          addressCurTelMobile: true,
          addressCurTelWork: true,
          addressPermCity: true,
          addressPermCountry: true,
          addressPermPcode: true,
          addressPermState: true,
          addressPermStreet1: true,
          addressPermStreet2: true,
          addressPermStreet3: true,
          addressPermStreet4: true,
          addressPermTel: true,
          addressPermTelMobile: true,
          addressPermTelWork: true,
          buckleyWaive: true,
          citCountry: true,
          citCountrySecond: true,
          company: true,
          curPaRes: true,
          dob: true,
          ethnicity: true,
          firstGenGrad: true,
          firstGenUgrad: true,
          gender: true,
          homepage: true,
          id: true,
          nativeTongue: true,
          qqNumber: true,
          selfGender: true,
          selfGenderOther: true,
          usCitizenOrPermanentResident: true,
          userId: true,
          usPerm: true,
          visastatus: true,
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
  @swagger.ApiOkResponse({ type: UsersInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsersInfo(
    @common.Param() params: UsersInfoWhereUniqueInput
  ): Promise<UsersInfo | null> {
    try {
      return await this.service.deleteUsersInfo({
        where: params,
        select: {
          additionalinfo: true,
          addressCurCity: true,
          addressCurCountry: true,
          addressCurPcode: true,
          addressCurState: true,
          addressCurStreet1: true,
          addressCurStreet2: true,
          addressCurStreet3: true,
          addressCurStreet4: true,
          addressCurTel: true,
          addressCurTelMobile: true,
          addressCurTelWork: true,
          addressPermCity: true,
          addressPermCountry: true,
          addressPermPcode: true,
          addressPermState: true,
          addressPermStreet1: true,
          addressPermStreet2: true,
          addressPermStreet3: true,
          addressPermStreet4: true,
          addressPermTel: true,
          addressPermTelMobile: true,
          addressPermTelWork: true,
          buckleyWaive: true,
          citCountry: true,
          citCountrySecond: true,
          company: true,
          curPaRes: true,
          dob: true,
          ethnicity: true,
          firstGenGrad: true,
          firstGenUgrad: true,
          gender: true,
          homepage: true,
          id: true,
          nativeTongue: true,
          qqNumber: true,
          selfGender: true,
          selfGenderOther: true,
          usCitizenOrPermanentResident: true,
          userId: true,
          usPerm: true,
          visastatus: true,
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
