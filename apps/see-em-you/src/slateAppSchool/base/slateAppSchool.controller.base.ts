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
import { SlateAppSchoolService } from "../slateAppSchool.service";
import { SlateAppSchoolCreateInput } from "./SlateAppSchoolCreateInput";
import { SlateAppSchool } from "./SlateAppSchool";
import { SlateAppSchoolFindManyArgs } from "./SlateAppSchoolFindManyArgs";
import { SlateAppSchoolWhereUniqueInput } from "./SlateAppSchoolWhereUniqueInput";
import { SlateAppSchoolUpdateInput } from "./SlateAppSchoolUpdateInput";

export class SlateAppSchoolControllerBase {
  constructor(protected readonly service: SlateAppSchoolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SlateAppSchool })
  async createSlateAppSchool(
    @common.Body() data: SlateAppSchoolCreateInput
  ): Promise<SlateAppSchool> {
    return await this.service.createSlateAppSchool({
      data: data,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        school1Awards: true,
        school1City: true,
        school1ClassRankNumeric: true,
        school1ClassRankXOutOfY: true,
        school1ClassSizeNumeric: true,
        school1Code: true,
        school1Confirmed: true,
        school1Country: true,
        school1Created: true,
        school1Degree: true,
        school1DegreeConferred: true,
        school1Field: true,
        school1From: true,
        school1Gpa: true,
        school1GpaConverted: true,
        school1GpaRecalculated: true,
        school1GpaScale: true,
        school1Honors: true,
        school1Hours: true,
        school1Institution: true,
        school1Language: true,
        school1Major: true,
        school1Major1: true,
        school1Major2: true,
        school1Minor: true,
        school1Region: true,
        school1To: true,
        school1Type: true,
        school1Updated: true,
        school1Website: true,
        school2Awards: true,
        school2City: true,
        school2ClassRankNumeric: true,
        school2ClassRankXOutOfY: true,
        school2ClassSizeNumeric: true,
        school2Code: true,
        school2Confirmed: true,
        school2Country: true,
        school2Created: true,
        school2Degree: true,
        school2DegreeConferred: true,
        school2Field: true,
        school2From: true,
        school2Gpa: true,
        school2GpaConverted: true,
        school2GpaRecalculated: true,
        school2GpaScale: true,
        school2Honors: true,
        school2Hours: true,
        school2Institution: true,
        school2Language: true,
        school2Major: true,
        school2Major1: true,
        school2Major2: true,
        school2Minor: true,
        school2Region: true,
        school2To: true,
        school2Type: true,
        school2Updated: true,
        school2Website: true,
        school3Awards: true,
        school3City: true,
        school3ClassRankNumeric: true,
        school3ClassRankXOutOfY: true,
        school3ClassSizeNumeric: true,
        school3Code: true,
        school3Confirmed: true,
        school3Country: true,
        school3Created: true,
        school3Degree: true,
        school3DegreeConferred: true,
        school3Field: true,
        school3From: true,
        school3Gpa: true,
        school3GpaConverted: true,
        school3GpaRecalculated: true,
        school3GpaScale: true,
        school3Honors: true,
        school3Hours: true,
        school3Institution: true,
        school3Language: true,
        school3Major: true,
        school3Major1: true,
        school3Major2: true,
        school3Minor: true,
        school3Region: true,
        school3To: true,
        school3Type: true,
        school3Updated: true,
        school3Website: true,
        school4Awards: true,
        school4City: true,
        school4ClassRankNumeric: true,
        school4ClassRankXOutOfY: true,
        school4ClassSizeNumeric: true,
        school4Code: true,
        school4Confirmed: true,
        school4Country: true,
        school4Created: true,
        school4Degree: true,
        school4DegreeConferred: true,
        school4Field: true,
        school4From: true,
        school4Gpa: true,
        school4GpaConverted: true,
        school4GpaRecalculated: true,
        school4GpaScale: true,
        school4Honors: true,
        school4Hours: true,
        school4Institution: true,
        school4Language: true,
        school4Major: true,
        school4Major1: true,
        school4Major2: true,
        school4Minor: true,
        school4Region: true,
        school4To: true,
        school4Type: true,
        school4Updated: true,
        school4Website: true,
        school5Awards: true,
        school5City: true,
        school5ClassRankNumeric: true,
        school5ClassRankXOutOfY: true,
        school5ClassSizeNumeric: true,
        school5Code: true,
        school5Confirmed: true,
        school5Country: true,
        school5Created: true,
        school5Degree: true,
        school5DegreeConferred: true,
        school5Field: true,
        school5From: true,
        school5Gpa: true,
        school5GpaConverted: true,
        school5GpaRecalculated: true,
        school5GpaScale: true,
        school5Honors: true,
        school5Hours: true,
        school5Institution: true,
        school5Language: true,
        school5Major: true,
        school5Major1: true,
        school5Major2: true,
        school5Minor: true,
        school5Region: true,
        school5To: true,
        school5Type: true,
        school5Updated: true,
        school5Website: true,
        schoolNum1NumberOfActiveApplications: true,
        schoolNum1Priority: true,
        schoolNum2Priority: true,
        schoolNum3Priority: true,
        schoolNum4Priority: true,
        schoolNum5Priority: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SlateAppSchool] })
  @ApiNestedQuery(SlateAppSchoolFindManyArgs)
  async slateAppSchools(
    @common.Req() request: Request
  ): Promise<SlateAppSchool[]> {
    const args = plainToClass(SlateAppSchoolFindManyArgs, request.query);
    return this.service.slateAppSchools({
      ...args,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        school1Awards: true,
        school1City: true,
        school1ClassRankNumeric: true,
        school1ClassRankXOutOfY: true,
        school1ClassSizeNumeric: true,
        school1Code: true,
        school1Confirmed: true,
        school1Country: true,
        school1Created: true,
        school1Degree: true,
        school1DegreeConferred: true,
        school1Field: true,
        school1From: true,
        school1Gpa: true,
        school1GpaConverted: true,
        school1GpaRecalculated: true,
        school1GpaScale: true,
        school1Honors: true,
        school1Hours: true,
        school1Institution: true,
        school1Language: true,
        school1Major: true,
        school1Major1: true,
        school1Major2: true,
        school1Minor: true,
        school1Region: true,
        school1To: true,
        school1Type: true,
        school1Updated: true,
        school1Website: true,
        school2Awards: true,
        school2City: true,
        school2ClassRankNumeric: true,
        school2ClassRankXOutOfY: true,
        school2ClassSizeNumeric: true,
        school2Code: true,
        school2Confirmed: true,
        school2Country: true,
        school2Created: true,
        school2Degree: true,
        school2DegreeConferred: true,
        school2Field: true,
        school2From: true,
        school2Gpa: true,
        school2GpaConverted: true,
        school2GpaRecalculated: true,
        school2GpaScale: true,
        school2Honors: true,
        school2Hours: true,
        school2Institution: true,
        school2Language: true,
        school2Major: true,
        school2Major1: true,
        school2Major2: true,
        school2Minor: true,
        school2Region: true,
        school2To: true,
        school2Type: true,
        school2Updated: true,
        school2Website: true,
        school3Awards: true,
        school3City: true,
        school3ClassRankNumeric: true,
        school3ClassRankXOutOfY: true,
        school3ClassSizeNumeric: true,
        school3Code: true,
        school3Confirmed: true,
        school3Country: true,
        school3Created: true,
        school3Degree: true,
        school3DegreeConferred: true,
        school3Field: true,
        school3From: true,
        school3Gpa: true,
        school3GpaConverted: true,
        school3GpaRecalculated: true,
        school3GpaScale: true,
        school3Honors: true,
        school3Hours: true,
        school3Institution: true,
        school3Language: true,
        school3Major: true,
        school3Major1: true,
        school3Major2: true,
        school3Minor: true,
        school3Region: true,
        school3To: true,
        school3Type: true,
        school3Updated: true,
        school3Website: true,
        school4Awards: true,
        school4City: true,
        school4ClassRankNumeric: true,
        school4ClassRankXOutOfY: true,
        school4ClassSizeNumeric: true,
        school4Code: true,
        school4Confirmed: true,
        school4Country: true,
        school4Created: true,
        school4Degree: true,
        school4DegreeConferred: true,
        school4Field: true,
        school4From: true,
        school4Gpa: true,
        school4GpaConverted: true,
        school4GpaRecalculated: true,
        school4GpaScale: true,
        school4Honors: true,
        school4Hours: true,
        school4Institution: true,
        school4Language: true,
        school4Major: true,
        school4Major1: true,
        school4Major2: true,
        school4Minor: true,
        school4Region: true,
        school4To: true,
        school4Type: true,
        school4Updated: true,
        school4Website: true,
        school5Awards: true,
        school5City: true,
        school5ClassRankNumeric: true,
        school5ClassRankXOutOfY: true,
        school5ClassSizeNumeric: true,
        school5Code: true,
        school5Confirmed: true,
        school5Country: true,
        school5Created: true,
        school5Degree: true,
        school5DegreeConferred: true,
        school5Field: true,
        school5From: true,
        school5Gpa: true,
        school5GpaConverted: true,
        school5GpaRecalculated: true,
        school5GpaScale: true,
        school5Honors: true,
        school5Hours: true,
        school5Institution: true,
        school5Language: true,
        school5Major: true,
        school5Major1: true,
        school5Major2: true,
        school5Minor: true,
        school5Region: true,
        school5To: true,
        school5Type: true,
        school5Updated: true,
        school5Website: true,
        schoolNum1NumberOfActiveApplications: true,
        schoolNum1Priority: true,
        schoolNum2Priority: true,
        schoolNum3Priority: true,
        schoolNum4Priority: true,
        schoolNum5Priority: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SlateAppSchool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async slateAppSchool(
    @common.Param() params: SlateAppSchoolWhereUniqueInput
  ): Promise<SlateAppSchool | null> {
    const result = await this.service.slateAppSchool({
      where: params,
      select: {
        first: true,
        id: true,
        last: true,
        middle: true,
        prefix: true,
        school1Awards: true,
        school1City: true,
        school1ClassRankNumeric: true,
        school1ClassRankXOutOfY: true,
        school1ClassSizeNumeric: true,
        school1Code: true,
        school1Confirmed: true,
        school1Country: true,
        school1Created: true,
        school1Degree: true,
        school1DegreeConferred: true,
        school1Field: true,
        school1From: true,
        school1Gpa: true,
        school1GpaConverted: true,
        school1GpaRecalculated: true,
        school1GpaScale: true,
        school1Honors: true,
        school1Hours: true,
        school1Institution: true,
        school1Language: true,
        school1Major: true,
        school1Major1: true,
        school1Major2: true,
        school1Minor: true,
        school1Region: true,
        school1To: true,
        school1Type: true,
        school1Updated: true,
        school1Website: true,
        school2Awards: true,
        school2City: true,
        school2ClassRankNumeric: true,
        school2ClassRankXOutOfY: true,
        school2ClassSizeNumeric: true,
        school2Code: true,
        school2Confirmed: true,
        school2Country: true,
        school2Created: true,
        school2Degree: true,
        school2DegreeConferred: true,
        school2Field: true,
        school2From: true,
        school2Gpa: true,
        school2GpaConverted: true,
        school2GpaRecalculated: true,
        school2GpaScale: true,
        school2Honors: true,
        school2Hours: true,
        school2Institution: true,
        school2Language: true,
        school2Major: true,
        school2Major1: true,
        school2Major2: true,
        school2Minor: true,
        school2Region: true,
        school2To: true,
        school2Type: true,
        school2Updated: true,
        school2Website: true,
        school3Awards: true,
        school3City: true,
        school3ClassRankNumeric: true,
        school3ClassRankXOutOfY: true,
        school3ClassSizeNumeric: true,
        school3Code: true,
        school3Confirmed: true,
        school3Country: true,
        school3Created: true,
        school3Degree: true,
        school3DegreeConferred: true,
        school3Field: true,
        school3From: true,
        school3Gpa: true,
        school3GpaConverted: true,
        school3GpaRecalculated: true,
        school3GpaScale: true,
        school3Honors: true,
        school3Hours: true,
        school3Institution: true,
        school3Language: true,
        school3Major: true,
        school3Major1: true,
        school3Major2: true,
        school3Minor: true,
        school3Region: true,
        school3To: true,
        school3Type: true,
        school3Updated: true,
        school3Website: true,
        school4Awards: true,
        school4City: true,
        school4ClassRankNumeric: true,
        school4ClassRankXOutOfY: true,
        school4ClassSizeNumeric: true,
        school4Code: true,
        school4Confirmed: true,
        school4Country: true,
        school4Created: true,
        school4Degree: true,
        school4DegreeConferred: true,
        school4Field: true,
        school4From: true,
        school4Gpa: true,
        school4GpaConverted: true,
        school4GpaRecalculated: true,
        school4GpaScale: true,
        school4Honors: true,
        school4Hours: true,
        school4Institution: true,
        school4Language: true,
        school4Major: true,
        school4Major1: true,
        school4Major2: true,
        school4Minor: true,
        school4Region: true,
        school4To: true,
        school4Type: true,
        school4Updated: true,
        school4Website: true,
        school5Awards: true,
        school5City: true,
        school5ClassRankNumeric: true,
        school5ClassRankXOutOfY: true,
        school5ClassSizeNumeric: true,
        school5Code: true,
        school5Confirmed: true,
        school5Country: true,
        school5Created: true,
        school5Degree: true,
        school5DegreeConferred: true,
        school5Field: true,
        school5From: true,
        school5Gpa: true,
        school5GpaConverted: true,
        school5GpaRecalculated: true,
        school5GpaScale: true,
        school5Honors: true,
        school5Hours: true,
        school5Institution: true,
        school5Language: true,
        school5Major: true,
        school5Major1: true,
        school5Major2: true,
        school5Minor: true,
        school5Region: true,
        school5To: true,
        school5Type: true,
        school5Updated: true,
        school5Website: true,
        schoolNum1NumberOfActiveApplications: true,
        schoolNum1Priority: true,
        schoolNum2Priority: true,
        schoolNum3Priority: true,
        schoolNum4Priority: true,
        schoolNum5Priority: true,
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
  @swagger.ApiOkResponse({ type: SlateAppSchool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSlateAppSchool(
    @common.Param() params: SlateAppSchoolWhereUniqueInput,
    @common.Body() data: SlateAppSchoolUpdateInput
  ): Promise<SlateAppSchool | null> {
    try {
      return await this.service.updateSlateAppSchool({
        where: params,
        data: data,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          school1Awards: true,
          school1City: true,
          school1ClassRankNumeric: true,
          school1ClassRankXOutOfY: true,
          school1ClassSizeNumeric: true,
          school1Code: true,
          school1Confirmed: true,
          school1Country: true,
          school1Created: true,
          school1Degree: true,
          school1DegreeConferred: true,
          school1Field: true,
          school1From: true,
          school1Gpa: true,
          school1GpaConverted: true,
          school1GpaRecalculated: true,
          school1GpaScale: true,
          school1Honors: true,
          school1Hours: true,
          school1Institution: true,
          school1Language: true,
          school1Major: true,
          school1Major1: true,
          school1Major2: true,
          school1Minor: true,
          school1Region: true,
          school1To: true,
          school1Type: true,
          school1Updated: true,
          school1Website: true,
          school2Awards: true,
          school2City: true,
          school2ClassRankNumeric: true,
          school2ClassRankXOutOfY: true,
          school2ClassSizeNumeric: true,
          school2Code: true,
          school2Confirmed: true,
          school2Country: true,
          school2Created: true,
          school2Degree: true,
          school2DegreeConferred: true,
          school2Field: true,
          school2From: true,
          school2Gpa: true,
          school2GpaConverted: true,
          school2GpaRecalculated: true,
          school2GpaScale: true,
          school2Honors: true,
          school2Hours: true,
          school2Institution: true,
          school2Language: true,
          school2Major: true,
          school2Major1: true,
          school2Major2: true,
          school2Minor: true,
          school2Region: true,
          school2To: true,
          school2Type: true,
          school2Updated: true,
          school2Website: true,
          school3Awards: true,
          school3City: true,
          school3ClassRankNumeric: true,
          school3ClassRankXOutOfY: true,
          school3ClassSizeNumeric: true,
          school3Code: true,
          school3Confirmed: true,
          school3Country: true,
          school3Created: true,
          school3Degree: true,
          school3DegreeConferred: true,
          school3Field: true,
          school3From: true,
          school3Gpa: true,
          school3GpaConverted: true,
          school3GpaRecalculated: true,
          school3GpaScale: true,
          school3Honors: true,
          school3Hours: true,
          school3Institution: true,
          school3Language: true,
          school3Major: true,
          school3Major1: true,
          school3Major2: true,
          school3Minor: true,
          school3Region: true,
          school3To: true,
          school3Type: true,
          school3Updated: true,
          school3Website: true,
          school4Awards: true,
          school4City: true,
          school4ClassRankNumeric: true,
          school4ClassRankXOutOfY: true,
          school4ClassSizeNumeric: true,
          school4Code: true,
          school4Confirmed: true,
          school4Country: true,
          school4Created: true,
          school4Degree: true,
          school4DegreeConferred: true,
          school4Field: true,
          school4From: true,
          school4Gpa: true,
          school4GpaConverted: true,
          school4GpaRecalculated: true,
          school4GpaScale: true,
          school4Honors: true,
          school4Hours: true,
          school4Institution: true,
          school4Language: true,
          school4Major: true,
          school4Major1: true,
          school4Major2: true,
          school4Minor: true,
          school4Region: true,
          school4To: true,
          school4Type: true,
          school4Updated: true,
          school4Website: true,
          school5Awards: true,
          school5City: true,
          school5ClassRankNumeric: true,
          school5ClassRankXOutOfY: true,
          school5ClassSizeNumeric: true,
          school5Code: true,
          school5Confirmed: true,
          school5Country: true,
          school5Created: true,
          school5Degree: true,
          school5DegreeConferred: true,
          school5Field: true,
          school5From: true,
          school5Gpa: true,
          school5GpaConverted: true,
          school5GpaRecalculated: true,
          school5GpaScale: true,
          school5Honors: true,
          school5Hours: true,
          school5Institution: true,
          school5Language: true,
          school5Major: true,
          school5Major1: true,
          school5Major2: true,
          school5Minor: true,
          school5Region: true,
          school5To: true,
          school5Type: true,
          school5Updated: true,
          school5Website: true,
          schoolNum1NumberOfActiveApplications: true,
          schoolNum1Priority: true,
          schoolNum2Priority: true,
          schoolNum3Priority: true,
          schoolNum4Priority: true,
          schoolNum5Priority: true,
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
  @swagger.ApiOkResponse({ type: SlateAppSchool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSlateAppSchool(
    @common.Param() params: SlateAppSchoolWhereUniqueInput
  ): Promise<SlateAppSchool | null> {
    try {
      return await this.service.deleteSlateAppSchool({
        where: params,
        select: {
          first: true,
          id: true,
          last: true,
          middle: true,
          prefix: true,
          school1Awards: true,
          school1City: true,
          school1ClassRankNumeric: true,
          school1ClassRankXOutOfY: true,
          school1ClassSizeNumeric: true,
          school1Code: true,
          school1Confirmed: true,
          school1Country: true,
          school1Created: true,
          school1Degree: true,
          school1DegreeConferred: true,
          school1Field: true,
          school1From: true,
          school1Gpa: true,
          school1GpaConverted: true,
          school1GpaRecalculated: true,
          school1GpaScale: true,
          school1Honors: true,
          school1Hours: true,
          school1Institution: true,
          school1Language: true,
          school1Major: true,
          school1Major1: true,
          school1Major2: true,
          school1Minor: true,
          school1Region: true,
          school1To: true,
          school1Type: true,
          school1Updated: true,
          school1Website: true,
          school2Awards: true,
          school2City: true,
          school2ClassRankNumeric: true,
          school2ClassRankXOutOfY: true,
          school2ClassSizeNumeric: true,
          school2Code: true,
          school2Confirmed: true,
          school2Country: true,
          school2Created: true,
          school2Degree: true,
          school2DegreeConferred: true,
          school2Field: true,
          school2From: true,
          school2Gpa: true,
          school2GpaConverted: true,
          school2GpaRecalculated: true,
          school2GpaScale: true,
          school2Honors: true,
          school2Hours: true,
          school2Institution: true,
          school2Language: true,
          school2Major: true,
          school2Major1: true,
          school2Major2: true,
          school2Minor: true,
          school2Region: true,
          school2To: true,
          school2Type: true,
          school2Updated: true,
          school2Website: true,
          school3Awards: true,
          school3City: true,
          school3ClassRankNumeric: true,
          school3ClassRankXOutOfY: true,
          school3ClassSizeNumeric: true,
          school3Code: true,
          school3Confirmed: true,
          school3Country: true,
          school3Created: true,
          school3Degree: true,
          school3DegreeConferred: true,
          school3Field: true,
          school3From: true,
          school3Gpa: true,
          school3GpaConverted: true,
          school3GpaRecalculated: true,
          school3GpaScale: true,
          school3Honors: true,
          school3Hours: true,
          school3Institution: true,
          school3Language: true,
          school3Major: true,
          school3Major1: true,
          school3Major2: true,
          school3Minor: true,
          school3Region: true,
          school3To: true,
          school3Type: true,
          school3Updated: true,
          school3Website: true,
          school4Awards: true,
          school4City: true,
          school4ClassRankNumeric: true,
          school4ClassRankXOutOfY: true,
          school4ClassSizeNumeric: true,
          school4Code: true,
          school4Confirmed: true,
          school4Country: true,
          school4Created: true,
          school4Degree: true,
          school4DegreeConferred: true,
          school4Field: true,
          school4From: true,
          school4Gpa: true,
          school4GpaConverted: true,
          school4GpaRecalculated: true,
          school4GpaScale: true,
          school4Honors: true,
          school4Hours: true,
          school4Institution: true,
          school4Language: true,
          school4Major: true,
          school4Major1: true,
          school4Major2: true,
          school4Minor: true,
          school4Region: true,
          school4To: true,
          school4Type: true,
          school4Updated: true,
          school4Website: true,
          school5Awards: true,
          school5City: true,
          school5ClassRankNumeric: true,
          school5ClassRankXOutOfY: true,
          school5ClassSizeNumeric: true,
          school5Code: true,
          school5Confirmed: true,
          school5Country: true,
          school5Created: true,
          school5Degree: true,
          school5DegreeConferred: true,
          school5Field: true,
          school5From: true,
          school5Gpa: true,
          school5GpaConverted: true,
          school5GpaRecalculated: true,
          school5GpaScale: true,
          school5Honors: true,
          school5Hours: true,
          school5Institution: true,
          school5Language: true,
          school5Major: true,
          school5Major1: true,
          school5Major2: true,
          school5Minor: true,
          school5Region: true,
          school5To: true,
          school5Type: true,
          school5Updated: true,
          school5Website: true,
          schoolNum1NumberOfActiveApplications: true,
          schoolNum1Priority: true,
          schoolNum2Priority: true,
          schoolNum3Priority: true,
          schoolNum4Priority: true,
          schoolNum5Priority: true,
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
