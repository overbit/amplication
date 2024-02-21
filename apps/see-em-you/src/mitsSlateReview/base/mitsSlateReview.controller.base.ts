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
import { MitsSlateReviewService } from "../mitsSlateReview.service";
import { MitsSlateReviewCreateInput } from "./MitsSlateReviewCreateInput";
import { MitsSlateReview } from "./MitsSlateReview";
import { MitsSlateReviewFindManyArgs } from "./MitsSlateReviewFindManyArgs";
import { MitsSlateReviewWhereUniqueInput } from "./MitsSlateReviewWhereUniqueInput";
import { MitsSlateReviewUpdateInput } from "./MitsSlateReviewUpdateInput";

export class MitsSlateReviewControllerBase {
  constructor(protected readonly service: MitsSlateReviewService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MitsSlateReview })
  async createMitsSlateReview(
    @common.Body() data: MitsSlateReviewCreateInput
  ): Promise<MitsSlateReview> {
    return await this.service.createMitsSlateReview({
      data: data,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        mseReviewFormNum1UserName: true,
        mseReviewFormNum1UserEmail: true,
        mseReviewFormNum1Started: true,
        mseReviewFormNum1Submitted: true,
        mseReviewFormNum1FromBin: true,
        mseReviewFormNum1IntoBin: true,
        mseReviewFormNum1EnglishComments: true,
        mseReviewFormNum1EnglishEvaluation: true,
        mseReviewFormNum1FoundationalKnowledgeComments: true,
        mseReviewFormNum1FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum1ExperienceComments: true,
        mseReviewFormNum1ExperienceEvaluation: true,
        mseReviewFormNum1AbilityToProgramComments: true,
        mseReviewFormNum1AbilityToProgramEvaluation: true,
        mseReviewFormNum1UnderstandingOfProgramComments: true,
        mseReviewFormNum1UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum1MaturityLeadershpComments: true,
        mseReviewFormNum1MaturityLeadershipEvaluation: true,
        mseReviewFormNum1Comments: true,
        mseReviewFormNum1RiskFactors: true,
        mseReviewFormNum1OtherRiskFactors: true,
        mseReviewFormNum1MseEvaluation: true,
        mseReviewFormNum1MsitEvaluation: true,
        mseReviewFormNum1CsseEvaluation: true,
        mseReviewFormNum2UserName: true,
        mseReviewFormNum2UserEmail: true,
        mseReviewFormNum2Started: true,
        mseReviewFormNum2Submitted: true,
        mseReviewFormNum2FromBin: true,
        mseReviewFormNum2IntoBin: true,
        mseReviewFormNum2EnglishComments: true,
        mseReviewFormNum2EnglishEvaluation: true,
        mseReviewFormNum2FoundationalKnowledgeComments: true,
        mseReviewFormNum2FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum2ExperienceComments: true,
        mseReviewFormNum2ExperienceEvaluation: true,
        mseReviewFormNum2AbilityToProgramComments: true,
        mseReviewFormNum2AbilityToProgramEvaluation: true,
        mseReviewFormNum2UnderstandingOfProgramComments: true,
        mseReviewFormNum2UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum2MaturityLeadershpComments: true,
        mseReviewFormNum2MaturityLeadershipEvaluation: true,
        mseReviewFormNum2Comments: true,
        mseReviewFormNum2RiskFactors: true,
        mseReviewFormNum2OtherRiskFactors: true,
        mseReviewFormNum2MseEvaluation: true,
        mseReviewFormNum2MsitEvaluation: true,
        mseReviewFormNum2CsseEvaluation: true,
        mseReviewFormNum3UserName: true,
        mseReviewFormNum3UserEmail: true,
        mseReviewFormNum3Started: true,
        mseReviewFormNum3Submitted: true,
        mseReviewFormNum3FromBin: true,
        mseReviewFormNum3IntoBin: true,
        mseReviewFormNum3EnglishComments: true,
        mseReviewFormNum3EnglishEvaluation: true,
        mseReviewFormNum3FoundationalKnowledgeComments: true,
        mseReviewFormNum3FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum3ExperienceComments: true,
        mseReviewFormNum3ExperienceEvaluation: true,
        mseReviewFormNum3AbilityToProgramComments: true,
        mseReviewFormNum3AbilityToProgramEvaluation: true,
        mseReviewFormNum3UnderstandingOfProgramComments: true,
        mseReviewFormNum3UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum3MaturityLeadershpComments: true,
        mseReviewFormNum3MaturityLeadershipEvaluation: true,
        mseReviewFormNum3Comments: true,
        mseReviewFormNum3RiskFactors: true,
        mseReviewFormNum3OtherRiskFactors: true,
        mseReviewFormNum3MseEvaluation: true,
        mseReviewFormNum3MsitEvaluation: true,
        mseReviewFormNum3CsseEvaluation: true,
        mseReviewFormNum4UserName: true,
        mseReviewFormNum4UserEmail: true,
        mseReviewFormNum4Started: true,
        mseReviewFormNum4Submitted: true,
        mseReviewFormNum4FromBin: true,
        mseReviewFormNum4IntoBin: true,
        mseReviewFormNum4EnglishComments: true,
        mseReviewFormNum4EnglishEvaluation: true,
        mseReviewFormNum4FoundationalKnowledgeComments: true,
        mseReviewFormNum4FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum4ExperienceComments: true,
        mseReviewFormNum4ExperienceEvaluation: true,
        mseReviewFormNum4AbilityToProgramComments: true,
        mseReviewFormNum4AbilityToProgramEvaluation: true,
        mseReviewFormNum4UnderstandingOfProgramComments: true,
        mseReviewFormNum4UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum4MaturityLeadershpComments: true,
        mseReviewFormNum4MaturityLeadershipEvaluation: true,
        mseReviewFormNum4Comments: true,
        mseReviewFormNum4RiskFactors: true,
        mseReviewFormNum4OtherRiskFactors: true,
        mseReviewFormNum4MseEvaluation: true,
        mseReviewFormNum4MsitEvaluation: true,
        mseReviewFormNum4CsseEvaluation: true,
        mseReviewFormNum5UserName: true,
        mseReviewFormNum5UserEmail: true,
        mseReviewFormNum5Started: true,
        mseReviewFormNum5Submitted: true,
        mseReviewFormNum5FromBin: true,
        mseReviewFormNum5IntoBin: true,
        mseReviewFormNum5EnglishComments: true,
        mseReviewFormNum5EnglishEvaluation: true,
        mseReviewFormNum5FoundationalKnowledgeComments: true,
        mseReviewFormNum5FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum5ExperienceComments: true,
        mseReviewFormNum5ExperienceEvaluation: true,
        mseReviewFormNum5AbilityToProgramComments: true,
        mseReviewFormNum5AbilityToProgramEvaluation: true,
        mseReviewFormNum5UnderstandingOfProgramComments: true,
        mseReviewFormNum5UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum5MaturityLeadershpComments: true,
        mseReviewFormNum5MaturityLeadershipEvaluation: true,
        mseReviewFormNum5Comments: true,
        mseReviewFormNum5RiskFactors: true,
        mseReviewFormNum5OtherRiskFactors: true,
        mseReviewFormNum5MseEvaluation: true,
        mseReviewFormNum5MsitEvaluation: true,
        mseReviewFormNum5CsseEvaluation: true,
        mseReviewFormNum1MitsEvaluation: true,
        mseReviewFormNum2MitsEvaluation: true,
        mseReviewFormNum3MitsEvaluation: true,
        mseReviewFormNum4MitsEvaluation: true,
        mseReviewFormNum5MitsEvaluation: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MitsSlateReview] })
  @ApiNestedQuery(MitsSlateReviewFindManyArgs)
  async mitsSlateReviews(
    @common.Req() request: Request
  ): Promise<MitsSlateReview[]> {
    const args = plainToClass(MitsSlateReviewFindManyArgs, request.query);
    return this.service.mitsSlateReviews({
      ...args,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        mseReviewFormNum1UserName: true,
        mseReviewFormNum1UserEmail: true,
        mseReviewFormNum1Started: true,
        mseReviewFormNum1Submitted: true,
        mseReviewFormNum1FromBin: true,
        mseReviewFormNum1IntoBin: true,
        mseReviewFormNum1EnglishComments: true,
        mseReviewFormNum1EnglishEvaluation: true,
        mseReviewFormNum1FoundationalKnowledgeComments: true,
        mseReviewFormNum1FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum1ExperienceComments: true,
        mseReviewFormNum1ExperienceEvaluation: true,
        mseReviewFormNum1AbilityToProgramComments: true,
        mseReviewFormNum1AbilityToProgramEvaluation: true,
        mseReviewFormNum1UnderstandingOfProgramComments: true,
        mseReviewFormNum1UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum1MaturityLeadershpComments: true,
        mseReviewFormNum1MaturityLeadershipEvaluation: true,
        mseReviewFormNum1Comments: true,
        mseReviewFormNum1RiskFactors: true,
        mseReviewFormNum1OtherRiskFactors: true,
        mseReviewFormNum1MseEvaluation: true,
        mseReviewFormNum1MsitEvaluation: true,
        mseReviewFormNum1CsseEvaluation: true,
        mseReviewFormNum2UserName: true,
        mseReviewFormNum2UserEmail: true,
        mseReviewFormNum2Started: true,
        mseReviewFormNum2Submitted: true,
        mseReviewFormNum2FromBin: true,
        mseReviewFormNum2IntoBin: true,
        mseReviewFormNum2EnglishComments: true,
        mseReviewFormNum2EnglishEvaluation: true,
        mseReviewFormNum2FoundationalKnowledgeComments: true,
        mseReviewFormNum2FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum2ExperienceComments: true,
        mseReviewFormNum2ExperienceEvaluation: true,
        mseReviewFormNum2AbilityToProgramComments: true,
        mseReviewFormNum2AbilityToProgramEvaluation: true,
        mseReviewFormNum2UnderstandingOfProgramComments: true,
        mseReviewFormNum2UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum2MaturityLeadershpComments: true,
        mseReviewFormNum2MaturityLeadershipEvaluation: true,
        mseReviewFormNum2Comments: true,
        mseReviewFormNum2RiskFactors: true,
        mseReviewFormNum2OtherRiskFactors: true,
        mseReviewFormNum2MseEvaluation: true,
        mseReviewFormNum2MsitEvaluation: true,
        mseReviewFormNum2CsseEvaluation: true,
        mseReviewFormNum3UserName: true,
        mseReviewFormNum3UserEmail: true,
        mseReviewFormNum3Started: true,
        mseReviewFormNum3Submitted: true,
        mseReviewFormNum3FromBin: true,
        mseReviewFormNum3IntoBin: true,
        mseReviewFormNum3EnglishComments: true,
        mseReviewFormNum3EnglishEvaluation: true,
        mseReviewFormNum3FoundationalKnowledgeComments: true,
        mseReviewFormNum3FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum3ExperienceComments: true,
        mseReviewFormNum3ExperienceEvaluation: true,
        mseReviewFormNum3AbilityToProgramComments: true,
        mseReviewFormNum3AbilityToProgramEvaluation: true,
        mseReviewFormNum3UnderstandingOfProgramComments: true,
        mseReviewFormNum3UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum3MaturityLeadershpComments: true,
        mseReviewFormNum3MaturityLeadershipEvaluation: true,
        mseReviewFormNum3Comments: true,
        mseReviewFormNum3RiskFactors: true,
        mseReviewFormNum3OtherRiskFactors: true,
        mseReviewFormNum3MseEvaluation: true,
        mseReviewFormNum3MsitEvaluation: true,
        mseReviewFormNum3CsseEvaluation: true,
        mseReviewFormNum4UserName: true,
        mseReviewFormNum4UserEmail: true,
        mseReviewFormNum4Started: true,
        mseReviewFormNum4Submitted: true,
        mseReviewFormNum4FromBin: true,
        mseReviewFormNum4IntoBin: true,
        mseReviewFormNum4EnglishComments: true,
        mseReviewFormNum4EnglishEvaluation: true,
        mseReviewFormNum4FoundationalKnowledgeComments: true,
        mseReviewFormNum4FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum4ExperienceComments: true,
        mseReviewFormNum4ExperienceEvaluation: true,
        mseReviewFormNum4AbilityToProgramComments: true,
        mseReviewFormNum4AbilityToProgramEvaluation: true,
        mseReviewFormNum4UnderstandingOfProgramComments: true,
        mseReviewFormNum4UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum4MaturityLeadershpComments: true,
        mseReviewFormNum4MaturityLeadershipEvaluation: true,
        mseReviewFormNum4Comments: true,
        mseReviewFormNum4RiskFactors: true,
        mseReviewFormNum4OtherRiskFactors: true,
        mseReviewFormNum4MseEvaluation: true,
        mseReviewFormNum4MsitEvaluation: true,
        mseReviewFormNum4CsseEvaluation: true,
        mseReviewFormNum5UserName: true,
        mseReviewFormNum5UserEmail: true,
        mseReviewFormNum5Started: true,
        mseReviewFormNum5Submitted: true,
        mseReviewFormNum5FromBin: true,
        mseReviewFormNum5IntoBin: true,
        mseReviewFormNum5EnglishComments: true,
        mseReviewFormNum5EnglishEvaluation: true,
        mseReviewFormNum5FoundationalKnowledgeComments: true,
        mseReviewFormNum5FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum5ExperienceComments: true,
        mseReviewFormNum5ExperienceEvaluation: true,
        mseReviewFormNum5AbilityToProgramComments: true,
        mseReviewFormNum5AbilityToProgramEvaluation: true,
        mseReviewFormNum5UnderstandingOfProgramComments: true,
        mseReviewFormNum5UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum5MaturityLeadershpComments: true,
        mseReviewFormNum5MaturityLeadershipEvaluation: true,
        mseReviewFormNum5Comments: true,
        mseReviewFormNum5RiskFactors: true,
        mseReviewFormNum5OtherRiskFactors: true,
        mseReviewFormNum5MseEvaluation: true,
        mseReviewFormNum5MsitEvaluation: true,
        mseReviewFormNum5CsseEvaluation: true,
        mseReviewFormNum1MitsEvaluation: true,
        mseReviewFormNum2MitsEvaluation: true,
        mseReviewFormNum3MitsEvaluation: true,
        mseReviewFormNum4MitsEvaluation: true,
        mseReviewFormNum5MitsEvaluation: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MitsSlateReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mitsSlateReview(
    @common.Param() params: MitsSlateReviewWhereUniqueInput
  ): Promise<MitsSlateReview | null> {
    const result = await this.service.mitsSlateReview({
      where: params,
      select: {
        prefix: true,
        first: true,
        middle: true,
        last: true,
        mseReviewFormNum1UserName: true,
        mseReviewFormNum1UserEmail: true,
        mseReviewFormNum1Started: true,
        mseReviewFormNum1Submitted: true,
        mseReviewFormNum1FromBin: true,
        mseReviewFormNum1IntoBin: true,
        mseReviewFormNum1EnglishComments: true,
        mseReviewFormNum1EnglishEvaluation: true,
        mseReviewFormNum1FoundationalKnowledgeComments: true,
        mseReviewFormNum1FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum1ExperienceComments: true,
        mseReviewFormNum1ExperienceEvaluation: true,
        mseReviewFormNum1AbilityToProgramComments: true,
        mseReviewFormNum1AbilityToProgramEvaluation: true,
        mseReviewFormNum1UnderstandingOfProgramComments: true,
        mseReviewFormNum1UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum1MaturityLeadershpComments: true,
        mseReviewFormNum1MaturityLeadershipEvaluation: true,
        mseReviewFormNum1Comments: true,
        mseReviewFormNum1RiskFactors: true,
        mseReviewFormNum1OtherRiskFactors: true,
        mseReviewFormNum1MseEvaluation: true,
        mseReviewFormNum1MsitEvaluation: true,
        mseReviewFormNum1CsseEvaluation: true,
        mseReviewFormNum2UserName: true,
        mseReviewFormNum2UserEmail: true,
        mseReviewFormNum2Started: true,
        mseReviewFormNum2Submitted: true,
        mseReviewFormNum2FromBin: true,
        mseReviewFormNum2IntoBin: true,
        mseReviewFormNum2EnglishComments: true,
        mseReviewFormNum2EnglishEvaluation: true,
        mseReviewFormNum2FoundationalKnowledgeComments: true,
        mseReviewFormNum2FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum2ExperienceComments: true,
        mseReviewFormNum2ExperienceEvaluation: true,
        mseReviewFormNum2AbilityToProgramComments: true,
        mseReviewFormNum2AbilityToProgramEvaluation: true,
        mseReviewFormNum2UnderstandingOfProgramComments: true,
        mseReviewFormNum2UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum2MaturityLeadershpComments: true,
        mseReviewFormNum2MaturityLeadershipEvaluation: true,
        mseReviewFormNum2Comments: true,
        mseReviewFormNum2RiskFactors: true,
        mseReviewFormNum2OtherRiskFactors: true,
        mseReviewFormNum2MseEvaluation: true,
        mseReviewFormNum2MsitEvaluation: true,
        mseReviewFormNum2CsseEvaluation: true,
        mseReviewFormNum3UserName: true,
        mseReviewFormNum3UserEmail: true,
        mseReviewFormNum3Started: true,
        mseReviewFormNum3Submitted: true,
        mseReviewFormNum3FromBin: true,
        mseReviewFormNum3IntoBin: true,
        mseReviewFormNum3EnglishComments: true,
        mseReviewFormNum3EnglishEvaluation: true,
        mseReviewFormNum3FoundationalKnowledgeComments: true,
        mseReviewFormNum3FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum3ExperienceComments: true,
        mseReviewFormNum3ExperienceEvaluation: true,
        mseReviewFormNum3AbilityToProgramComments: true,
        mseReviewFormNum3AbilityToProgramEvaluation: true,
        mseReviewFormNum3UnderstandingOfProgramComments: true,
        mseReviewFormNum3UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum3MaturityLeadershpComments: true,
        mseReviewFormNum3MaturityLeadershipEvaluation: true,
        mseReviewFormNum3Comments: true,
        mseReviewFormNum3RiskFactors: true,
        mseReviewFormNum3OtherRiskFactors: true,
        mseReviewFormNum3MseEvaluation: true,
        mseReviewFormNum3MsitEvaluation: true,
        mseReviewFormNum3CsseEvaluation: true,
        mseReviewFormNum4UserName: true,
        mseReviewFormNum4UserEmail: true,
        mseReviewFormNum4Started: true,
        mseReviewFormNum4Submitted: true,
        mseReviewFormNum4FromBin: true,
        mseReviewFormNum4IntoBin: true,
        mseReviewFormNum4EnglishComments: true,
        mseReviewFormNum4EnglishEvaluation: true,
        mseReviewFormNum4FoundationalKnowledgeComments: true,
        mseReviewFormNum4FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum4ExperienceComments: true,
        mseReviewFormNum4ExperienceEvaluation: true,
        mseReviewFormNum4AbilityToProgramComments: true,
        mseReviewFormNum4AbilityToProgramEvaluation: true,
        mseReviewFormNum4UnderstandingOfProgramComments: true,
        mseReviewFormNum4UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum4MaturityLeadershpComments: true,
        mseReviewFormNum4MaturityLeadershipEvaluation: true,
        mseReviewFormNum4Comments: true,
        mseReviewFormNum4RiskFactors: true,
        mseReviewFormNum4OtherRiskFactors: true,
        mseReviewFormNum4MseEvaluation: true,
        mseReviewFormNum4MsitEvaluation: true,
        mseReviewFormNum4CsseEvaluation: true,
        mseReviewFormNum5UserName: true,
        mseReviewFormNum5UserEmail: true,
        mseReviewFormNum5Started: true,
        mseReviewFormNum5Submitted: true,
        mseReviewFormNum5FromBin: true,
        mseReviewFormNum5IntoBin: true,
        mseReviewFormNum5EnglishComments: true,
        mseReviewFormNum5EnglishEvaluation: true,
        mseReviewFormNum5FoundationalKnowledgeComments: true,
        mseReviewFormNum5FoundationalKnowledgeEvaluation: true,
        mseReviewFormNum5ExperienceComments: true,
        mseReviewFormNum5ExperienceEvaluation: true,
        mseReviewFormNum5AbilityToProgramComments: true,
        mseReviewFormNum5AbilityToProgramEvaluation: true,
        mseReviewFormNum5UnderstandingOfProgramComments: true,
        mseReviewFormNum5UnderstandingOfProgramEvaluation: true,
        mseReviewFormNum5MaturityLeadershpComments: true,
        mseReviewFormNum5MaturityLeadershipEvaluation: true,
        mseReviewFormNum5Comments: true,
        mseReviewFormNum5RiskFactors: true,
        mseReviewFormNum5OtherRiskFactors: true,
        mseReviewFormNum5MseEvaluation: true,
        mseReviewFormNum5MsitEvaluation: true,
        mseReviewFormNum5CsseEvaluation: true,
        mseReviewFormNum1MitsEvaluation: true,
        mseReviewFormNum2MitsEvaluation: true,
        mseReviewFormNum3MitsEvaluation: true,
        mseReviewFormNum4MitsEvaluation: true,
        mseReviewFormNum5MitsEvaluation: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: MitsSlateReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMitsSlateReview(
    @common.Param() params: MitsSlateReviewWhereUniqueInput,
    @common.Body() data: MitsSlateReviewUpdateInput
  ): Promise<MitsSlateReview | null> {
    try {
      return await this.service.updateMitsSlateReview({
        where: params,
        data: data,
        select: {
          prefix: true,
          first: true,
          middle: true,
          last: true,
          mseReviewFormNum1UserName: true,
          mseReviewFormNum1UserEmail: true,
          mseReviewFormNum1Started: true,
          mseReviewFormNum1Submitted: true,
          mseReviewFormNum1FromBin: true,
          mseReviewFormNum1IntoBin: true,
          mseReviewFormNum1EnglishComments: true,
          mseReviewFormNum1EnglishEvaluation: true,
          mseReviewFormNum1FoundationalKnowledgeComments: true,
          mseReviewFormNum1FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum1ExperienceComments: true,
          mseReviewFormNum1ExperienceEvaluation: true,
          mseReviewFormNum1AbilityToProgramComments: true,
          mseReviewFormNum1AbilityToProgramEvaluation: true,
          mseReviewFormNum1UnderstandingOfProgramComments: true,
          mseReviewFormNum1UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum1MaturityLeadershpComments: true,
          mseReviewFormNum1MaturityLeadershipEvaluation: true,
          mseReviewFormNum1Comments: true,
          mseReviewFormNum1RiskFactors: true,
          mseReviewFormNum1OtherRiskFactors: true,
          mseReviewFormNum1MseEvaluation: true,
          mseReviewFormNum1MsitEvaluation: true,
          mseReviewFormNum1CsseEvaluation: true,
          mseReviewFormNum2UserName: true,
          mseReviewFormNum2UserEmail: true,
          mseReviewFormNum2Started: true,
          mseReviewFormNum2Submitted: true,
          mseReviewFormNum2FromBin: true,
          mseReviewFormNum2IntoBin: true,
          mseReviewFormNum2EnglishComments: true,
          mseReviewFormNum2EnglishEvaluation: true,
          mseReviewFormNum2FoundationalKnowledgeComments: true,
          mseReviewFormNum2FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum2ExperienceComments: true,
          mseReviewFormNum2ExperienceEvaluation: true,
          mseReviewFormNum2AbilityToProgramComments: true,
          mseReviewFormNum2AbilityToProgramEvaluation: true,
          mseReviewFormNum2UnderstandingOfProgramComments: true,
          mseReviewFormNum2UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum2MaturityLeadershpComments: true,
          mseReviewFormNum2MaturityLeadershipEvaluation: true,
          mseReviewFormNum2Comments: true,
          mseReviewFormNum2RiskFactors: true,
          mseReviewFormNum2OtherRiskFactors: true,
          mseReviewFormNum2MseEvaluation: true,
          mseReviewFormNum2MsitEvaluation: true,
          mseReviewFormNum2CsseEvaluation: true,
          mseReviewFormNum3UserName: true,
          mseReviewFormNum3UserEmail: true,
          mseReviewFormNum3Started: true,
          mseReviewFormNum3Submitted: true,
          mseReviewFormNum3FromBin: true,
          mseReviewFormNum3IntoBin: true,
          mseReviewFormNum3EnglishComments: true,
          mseReviewFormNum3EnglishEvaluation: true,
          mseReviewFormNum3FoundationalKnowledgeComments: true,
          mseReviewFormNum3FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum3ExperienceComments: true,
          mseReviewFormNum3ExperienceEvaluation: true,
          mseReviewFormNum3AbilityToProgramComments: true,
          mseReviewFormNum3AbilityToProgramEvaluation: true,
          mseReviewFormNum3UnderstandingOfProgramComments: true,
          mseReviewFormNum3UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum3MaturityLeadershpComments: true,
          mseReviewFormNum3MaturityLeadershipEvaluation: true,
          mseReviewFormNum3Comments: true,
          mseReviewFormNum3RiskFactors: true,
          mseReviewFormNum3OtherRiskFactors: true,
          mseReviewFormNum3MseEvaluation: true,
          mseReviewFormNum3MsitEvaluation: true,
          mseReviewFormNum3CsseEvaluation: true,
          mseReviewFormNum4UserName: true,
          mseReviewFormNum4UserEmail: true,
          mseReviewFormNum4Started: true,
          mseReviewFormNum4Submitted: true,
          mseReviewFormNum4FromBin: true,
          mseReviewFormNum4IntoBin: true,
          mseReviewFormNum4EnglishComments: true,
          mseReviewFormNum4EnglishEvaluation: true,
          mseReviewFormNum4FoundationalKnowledgeComments: true,
          mseReviewFormNum4FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum4ExperienceComments: true,
          mseReviewFormNum4ExperienceEvaluation: true,
          mseReviewFormNum4AbilityToProgramComments: true,
          mseReviewFormNum4AbilityToProgramEvaluation: true,
          mseReviewFormNum4UnderstandingOfProgramComments: true,
          mseReviewFormNum4UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum4MaturityLeadershpComments: true,
          mseReviewFormNum4MaturityLeadershipEvaluation: true,
          mseReviewFormNum4Comments: true,
          mseReviewFormNum4RiskFactors: true,
          mseReviewFormNum4OtherRiskFactors: true,
          mseReviewFormNum4MseEvaluation: true,
          mseReviewFormNum4MsitEvaluation: true,
          mseReviewFormNum4CsseEvaluation: true,
          mseReviewFormNum5UserName: true,
          mseReviewFormNum5UserEmail: true,
          mseReviewFormNum5Started: true,
          mseReviewFormNum5Submitted: true,
          mseReviewFormNum5FromBin: true,
          mseReviewFormNum5IntoBin: true,
          mseReviewFormNum5EnglishComments: true,
          mseReviewFormNum5EnglishEvaluation: true,
          mseReviewFormNum5FoundationalKnowledgeComments: true,
          mseReviewFormNum5FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum5ExperienceComments: true,
          mseReviewFormNum5ExperienceEvaluation: true,
          mseReviewFormNum5AbilityToProgramComments: true,
          mseReviewFormNum5AbilityToProgramEvaluation: true,
          mseReviewFormNum5UnderstandingOfProgramComments: true,
          mseReviewFormNum5UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum5MaturityLeadershpComments: true,
          mseReviewFormNum5MaturityLeadershipEvaluation: true,
          mseReviewFormNum5Comments: true,
          mseReviewFormNum5RiskFactors: true,
          mseReviewFormNum5OtherRiskFactors: true,
          mseReviewFormNum5MseEvaluation: true,
          mseReviewFormNum5MsitEvaluation: true,
          mseReviewFormNum5CsseEvaluation: true,
          mseReviewFormNum1MitsEvaluation: true,
          mseReviewFormNum2MitsEvaluation: true,
          mseReviewFormNum3MitsEvaluation: true,
          mseReviewFormNum4MitsEvaluation: true,
          mseReviewFormNum5MitsEvaluation: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: MitsSlateReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMitsSlateReview(
    @common.Param() params: MitsSlateReviewWhereUniqueInput
  ): Promise<MitsSlateReview | null> {
    try {
      return await this.service.deleteMitsSlateReview({
        where: params,
        select: {
          prefix: true,
          first: true,
          middle: true,
          last: true,
          mseReviewFormNum1UserName: true,
          mseReviewFormNum1UserEmail: true,
          mseReviewFormNum1Started: true,
          mseReviewFormNum1Submitted: true,
          mseReviewFormNum1FromBin: true,
          mseReviewFormNum1IntoBin: true,
          mseReviewFormNum1EnglishComments: true,
          mseReviewFormNum1EnglishEvaluation: true,
          mseReviewFormNum1FoundationalKnowledgeComments: true,
          mseReviewFormNum1FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum1ExperienceComments: true,
          mseReviewFormNum1ExperienceEvaluation: true,
          mseReviewFormNum1AbilityToProgramComments: true,
          mseReviewFormNum1AbilityToProgramEvaluation: true,
          mseReviewFormNum1UnderstandingOfProgramComments: true,
          mseReviewFormNum1UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum1MaturityLeadershpComments: true,
          mseReviewFormNum1MaturityLeadershipEvaluation: true,
          mseReviewFormNum1Comments: true,
          mseReviewFormNum1RiskFactors: true,
          mseReviewFormNum1OtherRiskFactors: true,
          mseReviewFormNum1MseEvaluation: true,
          mseReviewFormNum1MsitEvaluation: true,
          mseReviewFormNum1CsseEvaluation: true,
          mseReviewFormNum2UserName: true,
          mseReviewFormNum2UserEmail: true,
          mseReviewFormNum2Started: true,
          mseReviewFormNum2Submitted: true,
          mseReviewFormNum2FromBin: true,
          mseReviewFormNum2IntoBin: true,
          mseReviewFormNum2EnglishComments: true,
          mseReviewFormNum2EnglishEvaluation: true,
          mseReviewFormNum2FoundationalKnowledgeComments: true,
          mseReviewFormNum2FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum2ExperienceComments: true,
          mseReviewFormNum2ExperienceEvaluation: true,
          mseReviewFormNum2AbilityToProgramComments: true,
          mseReviewFormNum2AbilityToProgramEvaluation: true,
          mseReviewFormNum2UnderstandingOfProgramComments: true,
          mseReviewFormNum2UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum2MaturityLeadershpComments: true,
          mseReviewFormNum2MaturityLeadershipEvaluation: true,
          mseReviewFormNum2Comments: true,
          mseReviewFormNum2RiskFactors: true,
          mseReviewFormNum2OtherRiskFactors: true,
          mseReviewFormNum2MseEvaluation: true,
          mseReviewFormNum2MsitEvaluation: true,
          mseReviewFormNum2CsseEvaluation: true,
          mseReviewFormNum3UserName: true,
          mseReviewFormNum3UserEmail: true,
          mseReviewFormNum3Started: true,
          mseReviewFormNum3Submitted: true,
          mseReviewFormNum3FromBin: true,
          mseReviewFormNum3IntoBin: true,
          mseReviewFormNum3EnglishComments: true,
          mseReviewFormNum3EnglishEvaluation: true,
          mseReviewFormNum3FoundationalKnowledgeComments: true,
          mseReviewFormNum3FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum3ExperienceComments: true,
          mseReviewFormNum3ExperienceEvaluation: true,
          mseReviewFormNum3AbilityToProgramComments: true,
          mseReviewFormNum3AbilityToProgramEvaluation: true,
          mseReviewFormNum3UnderstandingOfProgramComments: true,
          mseReviewFormNum3UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum3MaturityLeadershpComments: true,
          mseReviewFormNum3MaturityLeadershipEvaluation: true,
          mseReviewFormNum3Comments: true,
          mseReviewFormNum3RiskFactors: true,
          mseReviewFormNum3OtherRiskFactors: true,
          mseReviewFormNum3MseEvaluation: true,
          mseReviewFormNum3MsitEvaluation: true,
          mseReviewFormNum3CsseEvaluation: true,
          mseReviewFormNum4UserName: true,
          mseReviewFormNum4UserEmail: true,
          mseReviewFormNum4Started: true,
          mseReviewFormNum4Submitted: true,
          mseReviewFormNum4FromBin: true,
          mseReviewFormNum4IntoBin: true,
          mseReviewFormNum4EnglishComments: true,
          mseReviewFormNum4EnglishEvaluation: true,
          mseReviewFormNum4FoundationalKnowledgeComments: true,
          mseReviewFormNum4FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum4ExperienceComments: true,
          mseReviewFormNum4ExperienceEvaluation: true,
          mseReviewFormNum4AbilityToProgramComments: true,
          mseReviewFormNum4AbilityToProgramEvaluation: true,
          mseReviewFormNum4UnderstandingOfProgramComments: true,
          mseReviewFormNum4UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum4MaturityLeadershpComments: true,
          mseReviewFormNum4MaturityLeadershipEvaluation: true,
          mseReviewFormNum4Comments: true,
          mseReviewFormNum4RiskFactors: true,
          mseReviewFormNum4OtherRiskFactors: true,
          mseReviewFormNum4MseEvaluation: true,
          mseReviewFormNum4MsitEvaluation: true,
          mseReviewFormNum4CsseEvaluation: true,
          mseReviewFormNum5UserName: true,
          mseReviewFormNum5UserEmail: true,
          mseReviewFormNum5Started: true,
          mseReviewFormNum5Submitted: true,
          mseReviewFormNum5FromBin: true,
          mseReviewFormNum5IntoBin: true,
          mseReviewFormNum5EnglishComments: true,
          mseReviewFormNum5EnglishEvaluation: true,
          mseReviewFormNum5FoundationalKnowledgeComments: true,
          mseReviewFormNum5FoundationalKnowledgeEvaluation: true,
          mseReviewFormNum5ExperienceComments: true,
          mseReviewFormNum5ExperienceEvaluation: true,
          mseReviewFormNum5AbilityToProgramComments: true,
          mseReviewFormNum5AbilityToProgramEvaluation: true,
          mseReviewFormNum5UnderstandingOfProgramComments: true,
          mseReviewFormNum5UnderstandingOfProgramEvaluation: true,
          mseReviewFormNum5MaturityLeadershpComments: true,
          mseReviewFormNum5MaturityLeadershipEvaluation: true,
          mseReviewFormNum5Comments: true,
          mseReviewFormNum5RiskFactors: true,
          mseReviewFormNum5OtherRiskFactors: true,
          mseReviewFormNum5MseEvaluation: true,
          mseReviewFormNum5MsitEvaluation: true,
          mseReviewFormNum5CsseEvaluation: true,
          mseReviewFormNum1MitsEvaluation: true,
          mseReviewFormNum2MitsEvaluation: true,
          mseReviewFormNum3MitsEvaluation: true,
          mseReviewFormNum4MitsEvaluation: true,
          mseReviewFormNum5MitsEvaluation: true,
          id: true,
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
