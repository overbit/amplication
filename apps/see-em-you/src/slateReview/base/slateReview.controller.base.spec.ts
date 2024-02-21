import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SlateReviewController } from "../slateReview.controller";
import { SlateReviewService } from "../slateReview.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  first: "exampleFirst",
  mseReviewFormNum2UserName: "exampleMseReviewFormNum2UserName",
  last: "exampleLast",
  mseReviewFormNum1UserName: "exampleMseReviewFormNum1UserName",
  mseReviewFormNum1UserEmail: "exampleMseReviewFormNum1UserEmail",
  mseReviewFormNum1Started: "exampleMseReviewFormNum1Started",
  mseReviewFormNum1Submitted: "exampleMseReviewFormNum1Submitted",
  mseReviewFormNum1FromBin: "exampleMseReviewFormNum1FromBin",
  mseReviewFormNum1IntoBin: "exampleMseReviewFormNum1IntoBin",
  mseReviewFormNum1EnglishComments: "exampleMseReviewFormNum1EnglishComments",
  mseReviewFormNum1EnglishEvaluation:
    "exampleMseReviewFormNum1EnglishEvaluation",
  mseReviewFormNum1FoundationalKnowledgeComments:
    "exampleMseReviewFormNum1FoundationalKnowledgeComments",
  mseReviewFormNum1FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum1FoundationalKnowledgeEvaluation",
  mseReviewFormNum1ExperienceComments:
    "exampleMseReviewFormNum1ExperienceComments",
  mseReviewFormNum1ExperienceEvaluation:
    "exampleMseReviewFormNum1ExperienceEvaluation",
  mseReviewFormNum1AbilityToProgramComments:
    "exampleMseReviewFormNum1AbilityToProgramComments",
  mseReviewFormNum1AbilityToProgramEvaluation:
    "exampleMseReviewFormNum1AbilityToProgramEvaluation",
  mseReviewFormNum1UnderstandingOfProgramComments:
    "exampleMseReviewFormNum1UnderstandingOfProgramComments",
  mseReviewFormNum1UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum1UnderstandingOfProgramEvaluation",
  mseReviewFormNum1MaturityLeadershpComments:
    "exampleMseReviewFormNum1MaturityLeadershpComments",
  mseReviewFormNum1MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum1MaturityLeadershipEvaluation",
  mseReviewFormNum1Comments: "exampleMseReviewFormNum1Comments",
  mseReviewFormNum1RiskFactors: "exampleMseReviewFormNum1RiskFactors",
  mseReviewFormNum1OtherRiskFactors: "exampleMseReviewFormNum1OtherRiskFactors",
  mseReviewFormNum1MseEvaluation: "exampleMseReviewFormNum1MseEvaluation",
  mseReviewFormNum1MsitEvaluation: "exampleMseReviewFormNum1MsitEvaluation",
  mseReviewFormNum1CsseEvaluation: "exampleMseReviewFormNum1CsseEvaluation",
  mseReviewFormNum2UserEmail: "exampleMseReviewFormNum2UserEmail",
  mseReviewFormNum2Started: "exampleMseReviewFormNum2Started",
  mseReviewFormNum2Submitted: "exampleMseReviewFormNum2Submitted",
  mseReviewFormNum2FromBin: "exampleMseReviewFormNum2FromBin",
  mseReviewFormNum2IntoBin: "exampleMseReviewFormNum2IntoBin",
  mseReviewFormNum2EnglishComments: "exampleMseReviewFormNum2EnglishComments",
  mseReviewFormNum2EnglishEvaluation:
    "exampleMseReviewFormNum2EnglishEvaluation",
  mseReviewFormNum2FoundationalKnowledgeComments:
    "exampleMseReviewFormNum2FoundationalKnowledgeComments",
  mseReviewFormNum2FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum2FoundationalKnowledgeEvaluation",
  mseReviewFormNum2ExperienceComments:
    "exampleMseReviewFormNum2ExperienceComments",
  mseReviewFormNum2ExperienceEvaluation:
    "exampleMseReviewFormNum2ExperienceEvaluation",
  mseReviewFormNum2AbilityToProgramComments:
    "exampleMseReviewFormNum2AbilityToProgramComments",
  mseReviewFormNum2AbilityToProgramEvaluation:
    "exampleMseReviewFormNum2AbilityToProgramEvaluation",
  mseReviewFormNum2UnderstandingOfProgramComments:
    "exampleMseReviewFormNum2UnderstandingOfProgramComments",
  mseReviewFormNum2UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum2UnderstandingOfProgramEvaluation",
  mseReviewFormNum2MaturityLeadershpComments:
    "exampleMseReviewFormNum2MaturityLeadershpComments",
  mseReviewFormNum2MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum2MaturityLeadershipEvaluation",
  mseReviewFormNum2Comments: "exampleMseReviewFormNum2Comments",
  mseReviewFormNum2RiskFactors: "exampleMseReviewFormNum2RiskFactors",
  mseReviewFormNum2OtherRiskFactors: "exampleMseReviewFormNum2OtherRiskFactors",
  mseReviewFormNum2MseEvaluation: "exampleMseReviewFormNum2MseEvaluation",
  mseReviewFormNum2MsitEvaluation: "exampleMseReviewFormNum2MsitEvaluation",
  mseReviewFormNum2CsseEvaluation: "exampleMseReviewFormNum2CsseEvaluation",
  mseReviewFormNum3UserName: "exampleMseReviewFormNum3UserName",
  mseReviewFormNum3UserEmail: "exampleMseReviewFormNum3UserEmail",
  mseReviewFormNum3Started: "exampleMseReviewFormNum3Started",
  mseReviewFormNum3Submitted: "exampleMseReviewFormNum3Submitted",
  mseReviewFormNum3FromBin: "exampleMseReviewFormNum3FromBin",
  mseReviewFormNum3IntoBin: "exampleMseReviewFormNum3IntoBin",
  mseReviewFormNum3EnglishComments: "exampleMseReviewFormNum3EnglishComments",
  mseReviewFormNum3EnglishEvaluation:
    "exampleMseReviewFormNum3EnglishEvaluation",
  mseReviewFormNum3FoundationalKnowledgeComments:
    "exampleMseReviewFormNum3FoundationalKnowledgeComments",
  mseReviewFormNum3FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum3FoundationalKnowledgeEvaluation",
  mseReviewFormNum3ExperienceComments:
    "exampleMseReviewFormNum3ExperienceComments",
  mseReviewFormNum3ExperienceEvaluation:
    "exampleMseReviewFormNum3ExperienceEvaluation",
  mseReviewFormNum3AbilityToProgramComments:
    "exampleMseReviewFormNum3AbilityToProgramComments",
  mseReviewFormNum3AbilityToProgramEvaluation:
    "exampleMseReviewFormNum3AbilityToProgramEvaluation",
  mseReviewFormNum3UnderstandingOfProgramComments:
    "exampleMseReviewFormNum3UnderstandingOfProgramComments",
  mseReviewFormNum3UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum3UnderstandingOfProgramEvaluation",
  mseReviewFormNum3MaturityLeadershpComments:
    "exampleMseReviewFormNum3MaturityLeadershpComments",
  mseReviewFormNum3MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum3MaturityLeadershipEvaluation",
  mseReviewFormNum3Comments: "exampleMseReviewFormNum3Comments",
  mseReviewFormNum3RiskFactors: "exampleMseReviewFormNum3RiskFactors",
  mseReviewFormNum3OtherRiskFactors: "exampleMseReviewFormNum3OtherRiskFactors",
  mseReviewFormNum3MseEvaluation: "exampleMseReviewFormNum3MseEvaluation",
  mseReviewFormNum3MsitEvaluation: "exampleMseReviewFormNum3MsitEvaluation",
  mseReviewFormNum3CsseEvaluation: "exampleMseReviewFormNum3CsseEvaluation",
  mseReviewFormNum4UserName: "exampleMseReviewFormNum4UserName",
  mseReviewFormNum4UserEmail: "exampleMseReviewFormNum4UserEmail",
  mseReviewFormNum4Started: "exampleMseReviewFormNum4Started",
  mseReviewFormNum4Submitted: "exampleMseReviewFormNum4Submitted",
  mseReviewFormNum4FromBin: "exampleMseReviewFormNum4FromBin",
  mseReviewFormNum4IntoBin: "exampleMseReviewFormNum4IntoBin",
  mseReviewFormNum4EnglishComments: "exampleMseReviewFormNum4EnglishComments",
  mseReviewFormNum4EnglishEvaluation:
    "exampleMseReviewFormNum4EnglishEvaluation",
  mseReviewFormNum4FoundationalKnowledgeComments:
    "exampleMseReviewFormNum4FoundationalKnowledgeComments",
  mseReviewFormNum4FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum4FoundationalKnowledgeEvaluation",
  mseReviewFormNum4ExperienceComments:
    "exampleMseReviewFormNum4ExperienceComments",
  mseReviewFormNum4ExperienceEvaluation:
    "exampleMseReviewFormNum4ExperienceEvaluation",
  mseReviewFormNum4AbilityToProgramComments:
    "exampleMseReviewFormNum4AbilityToProgramComments",
  mseReviewFormNum4AbilityToProgramEvaluation:
    "exampleMseReviewFormNum4AbilityToProgramEvaluation",
  mseReviewFormNum4UnderstandingOfProgramComments:
    "exampleMseReviewFormNum4UnderstandingOfProgramComments",
  mseReviewFormNum4UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum4UnderstandingOfProgramEvaluation",
  mseReviewFormNum4MaturityLeadershpComments:
    "exampleMseReviewFormNum4MaturityLeadershpComments",
  mseReviewFormNum4MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum4MaturityLeadershipEvaluation",
  mseReviewFormNum4Comments: "exampleMseReviewFormNum4Comments",
  mseReviewFormNum4RiskFactors: "exampleMseReviewFormNum4RiskFactors",
  mseReviewFormNum4OtherRiskFactors: "exampleMseReviewFormNum4OtherRiskFactors",
  mseReviewFormNum4MseEvaluation: "exampleMseReviewFormNum4MseEvaluation",
  mseReviewFormNum4MsitEvaluation: "exampleMseReviewFormNum4MsitEvaluation",
  mseReviewFormNum4CsseEvaluation: "exampleMseReviewFormNum4CsseEvaluation",
  mseReviewFormNum5UserName: "exampleMseReviewFormNum5UserName",
  mseReviewFormNum5UserEmail: "exampleMseReviewFormNum5UserEmail",
  mseReviewFormNum5Started: "exampleMseReviewFormNum5Started",
  mseReviewFormNum5Submitted: "exampleMseReviewFormNum5Submitted",
  mseReviewFormNum5FromBin: "exampleMseReviewFormNum5FromBin",
  mseReviewFormNum5IntoBin: "exampleMseReviewFormNum5IntoBin",
  mseReviewFormNum5EnglishComments: "exampleMseReviewFormNum5EnglishComments",
  mseReviewFormNum5EnglishEvaluation:
    "exampleMseReviewFormNum5EnglishEvaluation",
  mseReviewFormNum5FoundationalKnowledgeComments:
    "exampleMseReviewFormNum5FoundationalKnowledgeComments",
  mseReviewFormNum5FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum5FoundationalKnowledgeEvaluation",
  mseReviewFormNum5ExperienceComments:
    "exampleMseReviewFormNum5ExperienceComments",
  mseReviewFormNum5ExperienceEvaluation:
    "exampleMseReviewFormNum5ExperienceEvaluation",
  mseReviewFormNum5AbilityToProgramComments:
    "exampleMseReviewFormNum5AbilityToProgramComments",
  mseReviewFormNum5AbilityToProgramEvaluation:
    "exampleMseReviewFormNum5AbilityToProgramEvaluation",
  mseReviewFormNum5UnderstandingOfProgramComments:
    "exampleMseReviewFormNum5UnderstandingOfProgramComments",
  mseReviewFormNum5UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum5UnderstandingOfProgramEvaluation",
  mseReviewFormNum5MaturityLeadershpComments:
    "exampleMseReviewFormNum5MaturityLeadershpComments",
  mseReviewFormNum5MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum5MaturityLeadershipEvaluation",
  mseReviewFormNum5Comments: "exampleMseReviewFormNum5Comments",
  mseReviewFormNum5RiskFactors: "exampleMseReviewFormNum5RiskFactors",
  mseReviewFormNum5OtherRiskFactors: "exampleMseReviewFormNum5OtherRiskFactors",
  mseReviewFormNum5MseEvaluation: "exampleMseReviewFormNum5MseEvaluation",
  mseReviewFormNum5MsitEvaluation: "exampleMseReviewFormNum5MsitEvaluation",
  mseReviewFormNum5CsseEvaluation: "exampleMseReviewFormNum5CsseEvaluation",
  id: "exampleId",
};
const CREATE_RESULT = {
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  first: "exampleFirst",
  mseReviewFormNum2UserName: "exampleMseReviewFormNum2UserName",
  last: "exampleLast",
  mseReviewFormNum1UserName: "exampleMseReviewFormNum1UserName",
  mseReviewFormNum1UserEmail: "exampleMseReviewFormNum1UserEmail",
  mseReviewFormNum1Started: "exampleMseReviewFormNum1Started",
  mseReviewFormNum1Submitted: "exampleMseReviewFormNum1Submitted",
  mseReviewFormNum1FromBin: "exampleMseReviewFormNum1FromBin",
  mseReviewFormNum1IntoBin: "exampleMseReviewFormNum1IntoBin",
  mseReviewFormNum1EnglishComments: "exampleMseReviewFormNum1EnglishComments",
  mseReviewFormNum1EnglishEvaluation:
    "exampleMseReviewFormNum1EnglishEvaluation",
  mseReviewFormNum1FoundationalKnowledgeComments:
    "exampleMseReviewFormNum1FoundationalKnowledgeComments",
  mseReviewFormNum1FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum1FoundationalKnowledgeEvaluation",
  mseReviewFormNum1ExperienceComments:
    "exampleMseReviewFormNum1ExperienceComments",
  mseReviewFormNum1ExperienceEvaluation:
    "exampleMseReviewFormNum1ExperienceEvaluation",
  mseReviewFormNum1AbilityToProgramComments:
    "exampleMseReviewFormNum1AbilityToProgramComments",
  mseReviewFormNum1AbilityToProgramEvaluation:
    "exampleMseReviewFormNum1AbilityToProgramEvaluation",
  mseReviewFormNum1UnderstandingOfProgramComments:
    "exampleMseReviewFormNum1UnderstandingOfProgramComments",
  mseReviewFormNum1UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum1UnderstandingOfProgramEvaluation",
  mseReviewFormNum1MaturityLeadershpComments:
    "exampleMseReviewFormNum1MaturityLeadershpComments",
  mseReviewFormNum1MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum1MaturityLeadershipEvaluation",
  mseReviewFormNum1Comments: "exampleMseReviewFormNum1Comments",
  mseReviewFormNum1RiskFactors: "exampleMseReviewFormNum1RiskFactors",
  mseReviewFormNum1OtherRiskFactors: "exampleMseReviewFormNum1OtherRiskFactors",
  mseReviewFormNum1MseEvaluation: "exampleMseReviewFormNum1MseEvaluation",
  mseReviewFormNum1MsitEvaluation: "exampleMseReviewFormNum1MsitEvaluation",
  mseReviewFormNum1CsseEvaluation: "exampleMseReviewFormNum1CsseEvaluation",
  mseReviewFormNum2UserEmail: "exampleMseReviewFormNum2UserEmail",
  mseReviewFormNum2Started: "exampleMseReviewFormNum2Started",
  mseReviewFormNum2Submitted: "exampleMseReviewFormNum2Submitted",
  mseReviewFormNum2FromBin: "exampleMseReviewFormNum2FromBin",
  mseReviewFormNum2IntoBin: "exampleMseReviewFormNum2IntoBin",
  mseReviewFormNum2EnglishComments: "exampleMseReviewFormNum2EnglishComments",
  mseReviewFormNum2EnglishEvaluation:
    "exampleMseReviewFormNum2EnglishEvaluation",
  mseReviewFormNum2FoundationalKnowledgeComments:
    "exampleMseReviewFormNum2FoundationalKnowledgeComments",
  mseReviewFormNum2FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum2FoundationalKnowledgeEvaluation",
  mseReviewFormNum2ExperienceComments:
    "exampleMseReviewFormNum2ExperienceComments",
  mseReviewFormNum2ExperienceEvaluation:
    "exampleMseReviewFormNum2ExperienceEvaluation",
  mseReviewFormNum2AbilityToProgramComments:
    "exampleMseReviewFormNum2AbilityToProgramComments",
  mseReviewFormNum2AbilityToProgramEvaluation:
    "exampleMseReviewFormNum2AbilityToProgramEvaluation",
  mseReviewFormNum2UnderstandingOfProgramComments:
    "exampleMseReviewFormNum2UnderstandingOfProgramComments",
  mseReviewFormNum2UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum2UnderstandingOfProgramEvaluation",
  mseReviewFormNum2MaturityLeadershpComments:
    "exampleMseReviewFormNum2MaturityLeadershpComments",
  mseReviewFormNum2MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum2MaturityLeadershipEvaluation",
  mseReviewFormNum2Comments: "exampleMseReviewFormNum2Comments",
  mseReviewFormNum2RiskFactors: "exampleMseReviewFormNum2RiskFactors",
  mseReviewFormNum2OtherRiskFactors: "exampleMseReviewFormNum2OtherRiskFactors",
  mseReviewFormNum2MseEvaluation: "exampleMseReviewFormNum2MseEvaluation",
  mseReviewFormNum2MsitEvaluation: "exampleMseReviewFormNum2MsitEvaluation",
  mseReviewFormNum2CsseEvaluation: "exampleMseReviewFormNum2CsseEvaluation",
  mseReviewFormNum3UserName: "exampleMseReviewFormNum3UserName",
  mseReviewFormNum3UserEmail: "exampleMseReviewFormNum3UserEmail",
  mseReviewFormNum3Started: "exampleMseReviewFormNum3Started",
  mseReviewFormNum3Submitted: "exampleMseReviewFormNum3Submitted",
  mseReviewFormNum3FromBin: "exampleMseReviewFormNum3FromBin",
  mseReviewFormNum3IntoBin: "exampleMseReviewFormNum3IntoBin",
  mseReviewFormNum3EnglishComments: "exampleMseReviewFormNum3EnglishComments",
  mseReviewFormNum3EnglishEvaluation:
    "exampleMseReviewFormNum3EnglishEvaluation",
  mseReviewFormNum3FoundationalKnowledgeComments:
    "exampleMseReviewFormNum3FoundationalKnowledgeComments",
  mseReviewFormNum3FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum3FoundationalKnowledgeEvaluation",
  mseReviewFormNum3ExperienceComments:
    "exampleMseReviewFormNum3ExperienceComments",
  mseReviewFormNum3ExperienceEvaluation:
    "exampleMseReviewFormNum3ExperienceEvaluation",
  mseReviewFormNum3AbilityToProgramComments:
    "exampleMseReviewFormNum3AbilityToProgramComments",
  mseReviewFormNum3AbilityToProgramEvaluation:
    "exampleMseReviewFormNum3AbilityToProgramEvaluation",
  mseReviewFormNum3UnderstandingOfProgramComments:
    "exampleMseReviewFormNum3UnderstandingOfProgramComments",
  mseReviewFormNum3UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum3UnderstandingOfProgramEvaluation",
  mseReviewFormNum3MaturityLeadershpComments:
    "exampleMseReviewFormNum3MaturityLeadershpComments",
  mseReviewFormNum3MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum3MaturityLeadershipEvaluation",
  mseReviewFormNum3Comments: "exampleMseReviewFormNum3Comments",
  mseReviewFormNum3RiskFactors: "exampleMseReviewFormNum3RiskFactors",
  mseReviewFormNum3OtherRiskFactors: "exampleMseReviewFormNum3OtherRiskFactors",
  mseReviewFormNum3MseEvaluation: "exampleMseReviewFormNum3MseEvaluation",
  mseReviewFormNum3MsitEvaluation: "exampleMseReviewFormNum3MsitEvaluation",
  mseReviewFormNum3CsseEvaluation: "exampleMseReviewFormNum3CsseEvaluation",
  mseReviewFormNum4UserName: "exampleMseReviewFormNum4UserName",
  mseReviewFormNum4UserEmail: "exampleMseReviewFormNum4UserEmail",
  mseReviewFormNum4Started: "exampleMseReviewFormNum4Started",
  mseReviewFormNum4Submitted: "exampleMseReviewFormNum4Submitted",
  mseReviewFormNum4FromBin: "exampleMseReviewFormNum4FromBin",
  mseReviewFormNum4IntoBin: "exampleMseReviewFormNum4IntoBin",
  mseReviewFormNum4EnglishComments: "exampleMseReviewFormNum4EnglishComments",
  mseReviewFormNum4EnglishEvaluation:
    "exampleMseReviewFormNum4EnglishEvaluation",
  mseReviewFormNum4FoundationalKnowledgeComments:
    "exampleMseReviewFormNum4FoundationalKnowledgeComments",
  mseReviewFormNum4FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum4FoundationalKnowledgeEvaluation",
  mseReviewFormNum4ExperienceComments:
    "exampleMseReviewFormNum4ExperienceComments",
  mseReviewFormNum4ExperienceEvaluation:
    "exampleMseReviewFormNum4ExperienceEvaluation",
  mseReviewFormNum4AbilityToProgramComments:
    "exampleMseReviewFormNum4AbilityToProgramComments",
  mseReviewFormNum4AbilityToProgramEvaluation:
    "exampleMseReviewFormNum4AbilityToProgramEvaluation",
  mseReviewFormNum4UnderstandingOfProgramComments:
    "exampleMseReviewFormNum4UnderstandingOfProgramComments",
  mseReviewFormNum4UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum4UnderstandingOfProgramEvaluation",
  mseReviewFormNum4MaturityLeadershpComments:
    "exampleMseReviewFormNum4MaturityLeadershpComments",
  mseReviewFormNum4MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum4MaturityLeadershipEvaluation",
  mseReviewFormNum4Comments: "exampleMseReviewFormNum4Comments",
  mseReviewFormNum4RiskFactors: "exampleMseReviewFormNum4RiskFactors",
  mseReviewFormNum4OtherRiskFactors: "exampleMseReviewFormNum4OtherRiskFactors",
  mseReviewFormNum4MseEvaluation: "exampleMseReviewFormNum4MseEvaluation",
  mseReviewFormNum4MsitEvaluation: "exampleMseReviewFormNum4MsitEvaluation",
  mseReviewFormNum4CsseEvaluation: "exampleMseReviewFormNum4CsseEvaluation",
  mseReviewFormNum5UserName: "exampleMseReviewFormNum5UserName",
  mseReviewFormNum5UserEmail: "exampleMseReviewFormNum5UserEmail",
  mseReviewFormNum5Started: "exampleMseReviewFormNum5Started",
  mseReviewFormNum5Submitted: "exampleMseReviewFormNum5Submitted",
  mseReviewFormNum5FromBin: "exampleMseReviewFormNum5FromBin",
  mseReviewFormNum5IntoBin: "exampleMseReviewFormNum5IntoBin",
  mseReviewFormNum5EnglishComments: "exampleMseReviewFormNum5EnglishComments",
  mseReviewFormNum5EnglishEvaluation:
    "exampleMseReviewFormNum5EnglishEvaluation",
  mseReviewFormNum5FoundationalKnowledgeComments:
    "exampleMseReviewFormNum5FoundationalKnowledgeComments",
  mseReviewFormNum5FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum5FoundationalKnowledgeEvaluation",
  mseReviewFormNum5ExperienceComments:
    "exampleMseReviewFormNum5ExperienceComments",
  mseReviewFormNum5ExperienceEvaluation:
    "exampleMseReviewFormNum5ExperienceEvaluation",
  mseReviewFormNum5AbilityToProgramComments:
    "exampleMseReviewFormNum5AbilityToProgramComments",
  mseReviewFormNum5AbilityToProgramEvaluation:
    "exampleMseReviewFormNum5AbilityToProgramEvaluation",
  mseReviewFormNum5UnderstandingOfProgramComments:
    "exampleMseReviewFormNum5UnderstandingOfProgramComments",
  mseReviewFormNum5UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum5UnderstandingOfProgramEvaluation",
  mseReviewFormNum5MaturityLeadershpComments:
    "exampleMseReviewFormNum5MaturityLeadershpComments",
  mseReviewFormNum5MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum5MaturityLeadershipEvaluation",
  mseReviewFormNum5Comments: "exampleMseReviewFormNum5Comments",
  mseReviewFormNum5RiskFactors: "exampleMseReviewFormNum5RiskFactors",
  mseReviewFormNum5OtherRiskFactors: "exampleMseReviewFormNum5OtherRiskFactors",
  mseReviewFormNum5MseEvaluation: "exampleMseReviewFormNum5MseEvaluation",
  mseReviewFormNum5MsitEvaluation: "exampleMseReviewFormNum5MsitEvaluation",
  mseReviewFormNum5CsseEvaluation: "exampleMseReviewFormNum5CsseEvaluation",
  id: "exampleId",
};
const FIND_MANY_RESULT = [
  {
    middle: "exampleMiddle",
    prefix: "examplePrefix",
    first: "exampleFirst",
    mseReviewFormNum2UserName: "exampleMseReviewFormNum2UserName",
    last: "exampleLast",
    mseReviewFormNum1UserName: "exampleMseReviewFormNum1UserName",
    mseReviewFormNum1UserEmail: "exampleMseReviewFormNum1UserEmail",
    mseReviewFormNum1Started: "exampleMseReviewFormNum1Started",
    mseReviewFormNum1Submitted: "exampleMseReviewFormNum1Submitted",
    mseReviewFormNum1FromBin: "exampleMseReviewFormNum1FromBin",
    mseReviewFormNum1IntoBin: "exampleMseReviewFormNum1IntoBin",
    mseReviewFormNum1EnglishComments: "exampleMseReviewFormNum1EnglishComments",
    mseReviewFormNum1EnglishEvaluation:
      "exampleMseReviewFormNum1EnglishEvaluation",
    mseReviewFormNum1FoundationalKnowledgeComments:
      "exampleMseReviewFormNum1FoundationalKnowledgeComments",
    mseReviewFormNum1FoundationalKnowledgeEvaluation:
      "exampleMseReviewFormNum1FoundationalKnowledgeEvaluation",
    mseReviewFormNum1ExperienceComments:
      "exampleMseReviewFormNum1ExperienceComments",
    mseReviewFormNum1ExperienceEvaluation:
      "exampleMseReviewFormNum1ExperienceEvaluation",
    mseReviewFormNum1AbilityToProgramComments:
      "exampleMseReviewFormNum1AbilityToProgramComments",
    mseReviewFormNum1AbilityToProgramEvaluation:
      "exampleMseReviewFormNum1AbilityToProgramEvaluation",
    mseReviewFormNum1UnderstandingOfProgramComments:
      "exampleMseReviewFormNum1UnderstandingOfProgramComments",
    mseReviewFormNum1UnderstandingOfProgramEvaluation:
      "exampleMseReviewFormNum1UnderstandingOfProgramEvaluation",
    mseReviewFormNum1MaturityLeadershpComments:
      "exampleMseReviewFormNum1MaturityLeadershpComments",
    mseReviewFormNum1MaturityLeadershipEvaluation:
      "exampleMseReviewFormNum1MaturityLeadershipEvaluation",
    mseReviewFormNum1Comments: "exampleMseReviewFormNum1Comments",
    mseReviewFormNum1RiskFactors: "exampleMseReviewFormNum1RiskFactors",
    mseReviewFormNum1OtherRiskFactors:
      "exampleMseReviewFormNum1OtherRiskFactors",
    mseReviewFormNum1MseEvaluation: "exampleMseReviewFormNum1MseEvaluation",
    mseReviewFormNum1MsitEvaluation: "exampleMseReviewFormNum1MsitEvaluation",
    mseReviewFormNum1CsseEvaluation: "exampleMseReviewFormNum1CsseEvaluation",
    mseReviewFormNum2UserEmail: "exampleMseReviewFormNum2UserEmail",
    mseReviewFormNum2Started: "exampleMseReviewFormNum2Started",
    mseReviewFormNum2Submitted: "exampleMseReviewFormNum2Submitted",
    mseReviewFormNum2FromBin: "exampleMseReviewFormNum2FromBin",
    mseReviewFormNum2IntoBin: "exampleMseReviewFormNum2IntoBin",
    mseReviewFormNum2EnglishComments: "exampleMseReviewFormNum2EnglishComments",
    mseReviewFormNum2EnglishEvaluation:
      "exampleMseReviewFormNum2EnglishEvaluation",
    mseReviewFormNum2FoundationalKnowledgeComments:
      "exampleMseReviewFormNum2FoundationalKnowledgeComments",
    mseReviewFormNum2FoundationalKnowledgeEvaluation:
      "exampleMseReviewFormNum2FoundationalKnowledgeEvaluation",
    mseReviewFormNum2ExperienceComments:
      "exampleMseReviewFormNum2ExperienceComments",
    mseReviewFormNum2ExperienceEvaluation:
      "exampleMseReviewFormNum2ExperienceEvaluation",
    mseReviewFormNum2AbilityToProgramComments:
      "exampleMseReviewFormNum2AbilityToProgramComments",
    mseReviewFormNum2AbilityToProgramEvaluation:
      "exampleMseReviewFormNum2AbilityToProgramEvaluation",
    mseReviewFormNum2UnderstandingOfProgramComments:
      "exampleMseReviewFormNum2UnderstandingOfProgramComments",
    mseReviewFormNum2UnderstandingOfProgramEvaluation:
      "exampleMseReviewFormNum2UnderstandingOfProgramEvaluation",
    mseReviewFormNum2MaturityLeadershpComments:
      "exampleMseReviewFormNum2MaturityLeadershpComments",
    mseReviewFormNum2MaturityLeadershipEvaluation:
      "exampleMseReviewFormNum2MaturityLeadershipEvaluation",
    mseReviewFormNum2Comments: "exampleMseReviewFormNum2Comments",
    mseReviewFormNum2RiskFactors: "exampleMseReviewFormNum2RiskFactors",
    mseReviewFormNum2OtherRiskFactors:
      "exampleMseReviewFormNum2OtherRiskFactors",
    mseReviewFormNum2MseEvaluation: "exampleMseReviewFormNum2MseEvaluation",
    mseReviewFormNum2MsitEvaluation: "exampleMseReviewFormNum2MsitEvaluation",
    mseReviewFormNum2CsseEvaluation: "exampleMseReviewFormNum2CsseEvaluation",
    mseReviewFormNum3UserName: "exampleMseReviewFormNum3UserName",
    mseReviewFormNum3UserEmail: "exampleMseReviewFormNum3UserEmail",
    mseReviewFormNum3Started: "exampleMseReviewFormNum3Started",
    mseReviewFormNum3Submitted: "exampleMseReviewFormNum3Submitted",
    mseReviewFormNum3FromBin: "exampleMseReviewFormNum3FromBin",
    mseReviewFormNum3IntoBin: "exampleMseReviewFormNum3IntoBin",
    mseReviewFormNum3EnglishComments: "exampleMseReviewFormNum3EnglishComments",
    mseReviewFormNum3EnglishEvaluation:
      "exampleMseReviewFormNum3EnglishEvaluation",
    mseReviewFormNum3FoundationalKnowledgeComments:
      "exampleMseReviewFormNum3FoundationalKnowledgeComments",
    mseReviewFormNum3FoundationalKnowledgeEvaluation:
      "exampleMseReviewFormNum3FoundationalKnowledgeEvaluation",
    mseReviewFormNum3ExperienceComments:
      "exampleMseReviewFormNum3ExperienceComments",
    mseReviewFormNum3ExperienceEvaluation:
      "exampleMseReviewFormNum3ExperienceEvaluation",
    mseReviewFormNum3AbilityToProgramComments:
      "exampleMseReviewFormNum3AbilityToProgramComments",
    mseReviewFormNum3AbilityToProgramEvaluation:
      "exampleMseReviewFormNum3AbilityToProgramEvaluation",
    mseReviewFormNum3UnderstandingOfProgramComments:
      "exampleMseReviewFormNum3UnderstandingOfProgramComments",
    mseReviewFormNum3UnderstandingOfProgramEvaluation:
      "exampleMseReviewFormNum3UnderstandingOfProgramEvaluation",
    mseReviewFormNum3MaturityLeadershpComments:
      "exampleMseReviewFormNum3MaturityLeadershpComments",
    mseReviewFormNum3MaturityLeadershipEvaluation:
      "exampleMseReviewFormNum3MaturityLeadershipEvaluation",
    mseReviewFormNum3Comments: "exampleMseReviewFormNum3Comments",
    mseReviewFormNum3RiskFactors: "exampleMseReviewFormNum3RiskFactors",
    mseReviewFormNum3OtherRiskFactors:
      "exampleMseReviewFormNum3OtherRiskFactors",
    mseReviewFormNum3MseEvaluation: "exampleMseReviewFormNum3MseEvaluation",
    mseReviewFormNum3MsitEvaluation: "exampleMseReviewFormNum3MsitEvaluation",
    mseReviewFormNum3CsseEvaluation: "exampleMseReviewFormNum3CsseEvaluation",
    mseReviewFormNum4UserName: "exampleMseReviewFormNum4UserName",
    mseReviewFormNum4UserEmail: "exampleMseReviewFormNum4UserEmail",
    mseReviewFormNum4Started: "exampleMseReviewFormNum4Started",
    mseReviewFormNum4Submitted: "exampleMseReviewFormNum4Submitted",
    mseReviewFormNum4FromBin: "exampleMseReviewFormNum4FromBin",
    mseReviewFormNum4IntoBin: "exampleMseReviewFormNum4IntoBin",
    mseReviewFormNum4EnglishComments: "exampleMseReviewFormNum4EnglishComments",
    mseReviewFormNum4EnglishEvaluation:
      "exampleMseReviewFormNum4EnglishEvaluation",
    mseReviewFormNum4FoundationalKnowledgeComments:
      "exampleMseReviewFormNum4FoundationalKnowledgeComments",
    mseReviewFormNum4FoundationalKnowledgeEvaluation:
      "exampleMseReviewFormNum4FoundationalKnowledgeEvaluation",
    mseReviewFormNum4ExperienceComments:
      "exampleMseReviewFormNum4ExperienceComments",
    mseReviewFormNum4ExperienceEvaluation:
      "exampleMseReviewFormNum4ExperienceEvaluation",
    mseReviewFormNum4AbilityToProgramComments:
      "exampleMseReviewFormNum4AbilityToProgramComments",
    mseReviewFormNum4AbilityToProgramEvaluation:
      "exampleMseReviewFormNum4AbilityToProgramEvaluation",
    mseReviewFormNum4UnderstandingOfProgramComments:
      "exampleMseReviewFormNum4UnderstandingOfProgramComments",
    mseReviewFormNum4UnderstandingOfProgramEvaluation:
      "exampleMseReviewFormNum4UnderstandingOfProgramEvaluation",
    mseReviewFormNum4MaturityLeadershpComments:
      "exampleMseReviewFormNum4MaturityLeadershpComments",
    mseReviewFormNum4MaturityLeadershipEvaluation:
      "exampleMseReviewFormNum4MaturityLeadershipEvaluation",
    mseReviewFormNum4Comments: "exampleMseReviewFormNum4Comments",
    mseReviewFormNum4RiskFactors: "exampleMseReviewFormNum4RiskFactors",
    mseReviewFormNum4OtherRiskFactors:
      "exampleMseReviewFormNum4OtherRiskFactors",
    mseReviewFormNum4MseEvaluation: "exampleMseReviewFormNum4MseEvaluation",
    mseReviewFormNum4MsitEvaluation: "exampleMseReviewFormNum4MsitEvaluation",
    mseReviewFormNum4CsseEvaluation: "exampleMseReviewFormNum4CsseEvaluation",
    mseReviewFormNum5UserName: "exampleMseReviewFormNum5UserName",
    mseReviewFormNum5UserEmail: "exampleMseReviewFormNum5UserEmail",
    mseReviewFormNum5Started: "exampleMseReviewFormNum5Started",
    mseReviewFormNum5Submitted: "exampleMseReviewFormNum5Submitted",
    mseReviewFormNum5FromBin: "exampleMseReviewFormNum5FromBin",
    mseReviewFormNum5IntoBin: "exampleMseReviewFormNum5IntoBin",
    mseReviewFormNum5EnglishComments: "exampleMseReviewFormNum5EnglishComments",
    mseReviewFormNum5EnglishEvaluation:
      "exampleMseReviewFormNum5EnglishEvaluation",
    mseReviewFormNum5FoundationalKnowledgeComments:
      "exampleMseReviewFormNum5FoundationalKnowledgeComments",
    mseReviewFormNum5FoundationalKnowledgeEvaluation:
      "exampleMseReviewFormNum5FoundationalKnowledgeEvaluation",
    mseReviewFormNum5ExperienceComments:
      "exampleMseReviewFormNum5ExperienceComments",
    mseReviewFormNum5ExperienceEvaluation:
      "exampleMseReviewFormNum5ExperienceEvaluation",
    mseReviewFormNum5AbilityToProgramComments:
      "exampleMseReviewFormNum5AbilityToProgramComments",
    mseReviewFormNum5AbilityToProgramEvaluation:
      "exampleMseReviewFormNum5AbilityToProgramEvaluation",
    mseReviewFormNum5UnderstandingOfProgramComments:
      "exampleMseReviewFormNum5UnderstandingOfProgramComments",
    mseReviewFormNum5UnderstandingOfProgramEvaluation:
      "exampleMseReviewFormNum5UnderstandingOfProgramEvaluation",
    mseReviewFormNum5MaturityLeadershpComments:
      "exampleMseReviewFormNum5MaturityLeadershpComments",
    mseReviewFormNum5MaturityLeadershipEvaluation:
      "exampleMseReviewFormNum5MaturityLeadershipEvaluation",
    mseReviewFormNum5Comments: "exampleMseReviewFormNum5Comments",
    mseReviewFormNum5RiskFactors: "exampleMseReviewFormNum5RiskFactors",
    mseReviewFormNum5OtherRiskFactors:
      "exampleMseReviewFormNum5OtherRiskFactors",
    mseReviewFormNum5MseEvaluation: "exampleMseReviewFormNum5MseEvaluation",
    mseReviewFormNum5MsitEvaluation: "exampleMseReviewFormNum5MsitEvaluation",
    mseReviewFormNum5CsseEvaluation: "exampleMseReviewFormNum5CsseEvaluation",
    id: "exampleId",
  },
];
const FIND_ONE_RESULT = {
  middle: "exampleMiddle",
  prefix: "examplePrefix",
  first: "exampleFirst",
  mseReviewFormNum2UserName: "exampleMseReviewFormNum2UserName",
  last: "exampleLast",
  mseReviewFormNum1UserName: "exampleMseReviewFormNum1UserName",
  mseReviewFormNum1UserEmail: "exampleMseReviewFormNum1UserEmail",
  mseReviewFormNum1Started: "exampleMseReviewFormNum1Started",
  mseReviewFormNum1Submitted: "exampleMseReviewFormNum1Submitted",
  mseReviewFormNum1FromBin: "exampleMseReviewFormNum1FromBin",
  mseReviewFormNum1IntoBin: "exampleMseReviewFormNum1IntoBin",
  mseReviewFormNum1EnglishComments: "exampleMseReviewFormNum1EnglishComments",
  mseReviewFormNum1EnglishEvaluation:
    "exampleMseReviewFormNum1EnglishEvaluation",
  mseReviewFormNum1FoundationalKnowledgeComments:
    "exampleMseReviewFormNum1FoundationalKnowledgeComments",
  mseReviewFormNum1FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum1FoundationalKnowledgeEvaluation",
  mseReviewFormNum1ExperienceComments:
    "exampleMseReviewFormNum1ExperienceComments",
  mseReviewFormNum1ExperienceEvaluation:
    "exampleMseReviewFormNum1ExperienceEvaluation",
  mseReviewFormNum1AbilityToProgramComments:
    "exampleMseReviewFormNum1AbilityToProgramComments",
  mseReviewFormNum1AbilityToProgramEvaluation:
    "exampleMseReviewFormNum1AbilityToProgramEvaluation",
  mseReviewFormNum1UnderstandingOfProgramComments:
    "exampleMseReviewFormNum1UnderstandingOfProgramComments",
  mseReviewFormNum1UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum1UnderstandingOfProgramEvaluation",
  mseReviewFormNum1MaturityLeadershpComments:
    "exampleMseReviewFormNum1MaturityLeadershpComments",
  mseReviewFormNum1MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum1MaturityLeadershipEvaluation",
  mseReviewFormNum1Comments: "exampleMseReviewFormNum1Comments",
  mseReviewFormNum1RiskFactors: "exampleMseReviewFormNum1RiskFactors",
  mseReviewFormNum1OtherRiskFactors: "exampleMseReviewFormNum1OtherRiskFactors",
  mseReviewFormNum1MseEvaluation: "exampleMseReviewFormNum1MseEvaluation",
  mseReviewFormNum1MsitEvaluation: "exampleMseReviewFormNum1MsitEvaluation",
  mseReviewFormNum1CsseEvaluation: "exampleMseReviewFormNum1CsseEvaluation",
  mseReviewFormNum2UserEmail: "exampleMseReviewFormNum2UserEmail",
  mseReviewFormNum2Started: "exampleMseReviewFormNum2Started",
  mseReviewFormNum2Submitted: "exampleMseReviewFormNum2Submitted",
  mseReviewFormNum2FromBin: "exampleMseReviewFormNum2FromBin",
  mseReviewFormNum2IntoBin: "exampleMseReviewFormNum2IntoBin",
  mseReviewFormNum2EnglishComments: "exampleMseReviewFormNum2EnglishComments",
  mseReviewFormNum2EnglishEvaluation:
    "exampleMseReviewFormNum2EnglishEvaluation",
  mseReviewFormNum2FoundationalKnowledgeComments:
    "exampleMseReviewFormNum2FoundationalKnowledgeComments",
  mseReviewFormNum2FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum2FoundationalKnowledgeEvaluation",
  mseReviewFormNum2ExperienceComments:
    "exampleMseReviewFormNum2ExperienceComments",
  mseReviewFormNum2ExperienceEvaluation:
    "exampleMseReviewFormNum2ExperienceEvaluation",
  mseReviewFormNum2AbilityToProgramComments:
    "exampleMseReviewFormNum2AbilityToProgramComments",
  mseReviewFormNum2AbilityToProgramEvaluation:
    "exampleMseReviewFormNum2AbilityToProgramEvaluation",
  mseReviewFormNum2UnderstandingOfProgramComments:
    "exampleMseReviewFormNum2UnderstandingOfProgramComments",
  mseReviewFormNum2UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum2UnderstandingOfProgramEvaluation",
  mseReviewFormNum2MaturityLeadershpComments:
    "exampleMseReviewFormNum2MaturityLeadershpComments",
  mseReviewFormNum2MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum2MaturityLeadershipEvaluation",
  mseReviewFormNum2Comments: "exampleMseReviewFormNum2Comments",
  mseReviewFormNum2RiskFactors: "exampleMseReviewFormNum2RiskFactors",
  mseReviewFormNum2OtherRiskFactors: "exampleMseReviewFormNum2OtherRiskFactors",
  mseReviewFormNum2MseEvaluation: "exampleMseReviewFormNum2MseEvaluation",
  mseReviewFormNum2MsitEvaluation: "exampleMseReviewFormNum2MsitEvaluation",
  mseReviewFormNum2CsseEvaluation: "exampleMseReviewFormNum2CsseEvaluation",
  mseReviewFormNum3UserName: "exampleMseReviewFormNum3UserName",
  mseReviewFormNum3UserEmail: "exampleMseReviewFormNum3UserEmail",
  mseReviewFormNum3Started: "exampleMseReviewFormNum3Started",
  mseReviewFormNum3Submitted: "exampleMseReviewFormNum3Submitted",
  mseReviewFormNum3FromBin: "exampleMseReviewFormNum3FromBin",
  mseReviewFormNum3IntoBin: "exampleMseReviewFormNum3IntoBin",
  mseReviewFormNum3EnglishComments: "exampleMseReviewFormNum3EnglishComments",
  mseReviewFormNum3EnglishEvaluation:
    "exampleMseReviewFormNum3EnglishEvaluation",
  mseReviewFormNum3FoundationalKnowledgeComments:
    "exampleMseReviewFormNum3FoundationalKnowledgeComments",
  mseReviewFormNum3FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum3FoundationalKnowledgeEvaluation",
  mseReviewFormNum3ExperienceComments:
    "exampleMseReviewFormNum3ExperienceComments",
  mseReviewFormNum3ExperienceEvaluation:
    "exampleMseReviewFormNum3ExperienceEvaluation",
  mseReviewFormNum3AbilityToProgramComments:
    "exampleMseReviewFormNum3AbilityToProgramComments",
  mseReviewFormNum3AbilityToProgramEvaluation:
    "exampleMseReviewFormNum3AbilityToProgramEvaluation",
  mseReviewFormNum3UnderstandingOfProgramComments:
    "exampleMseReviewFormNum3UnderstandingOfProgramComments",
  mseReviewFormNum3UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum3UnderstandingOfProgramEvaluation",
  mseReviewFormNum3MaturityLeadershpComments:
    "exampleMseReviewFormNum3MaturityLeadershpComments",
  mseReviewFormNum3MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum3MaturityLeadershipEvaluation",
  mseReviewFormNum3Comments: "exampleMseReviewFormNum3Comments",
  mseReviewFormNum3RiskFactors: "exampleMseReviewFormNum3RiskFactors",
  mseReviewFormNum3OtherRiskFactors: "exampleMseReviewFormNum3OtherRiskFactors",
  mseReviewFormNum3MseEvaluation: "exampleMseReviewFormNum3MseEvaluation",
  mseReviewFormNum3MsitEvaluation: "exampleMseReviewFormNum3MsitEvaluation",
  mseReviewFormNum3CsseEvaluation: "exampleMseReviewFormNum3CsseEvaluation",
  mseReviewFormNum4UserName: "exampleMseReviewFormNum4UserName",
  mseReviewFormNum4UserEmail: "exampleMseReviewFormNum4UserEmail",
  mseReviewFormNum4Started: "exampleMseReviewFormNum4Started",
  mseReviewFormNum4Submitted: "exampleMseReviewFormNum4Submitted",
  mseReviewFormNum4FromBin: "exampleMseReviewFormNum4FromBin",
  mseReviewFormNum4IntoBin: "exampleMseReviewFormNum4IntoBin",
  mseReviewFormNum4EnglishComments: "exampleMseReviewFormNum4EnglishComments",
  mseReviewFormNum4EnglishEvaluation:
    "exampleMseReviewFormNum4EnglishEvaluation",
  mseReviewFormNum4FoundationalKnowledgeComments:
    "exampleMseReviewFormNum4FoundationalKnowledgeComments",
  mseReviewFormNum4FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum4FoundationalKnowledgeEvaluation",
  mseReviewFormNum4ExperienceComments:
    "exampleMseReviewFormNum4ExperienceComments",
  mseReviewFormNum4ExperienceEvaluation:
    "exampleMseReviewFormNum4ExperienceEvaluation",
  mseReviewFormNum4AbilityToProgramComments:
    "exampleMseReviewFormNum4AbilityToProgramComments",
  mseReviewFormNum4AbilityToProgramEvaluation:
    "exampleMseReviewFormNum4AbilityToProgramEvaluation",
  mseReviewFormNum4UnderstandingOfProgramComments:
    "exampleMseReviewFormNum4UnderstandingOfProgramComments",
  mseReviewFormNum4UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum4UnderstandingOfProgramEvaluation",
  mseReviewFormNum4MaturityLeadershpComments:
    "exampleMseReviewFormNum4MaturityLeadershpComments",
  mseReviewFormNum4MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum4MaturityLeadershipEvaluation",
  mseReviewFormNum4Comments: "exampleMseReviewFormNum4Comments",
  mseReviewFormNum4RiskFactors: "exampleMseReviewFormNum4RiskFactors",
  mseReviewFormNum4OtherRiskFactors: "exampleMseReviewFormNum4OtherRiskFactors",
  mseReviewFormNum4MseEvaluation: "exampleMseReviewFormNum4MseEvaluation",
  mseReviewFormNum4MsitEvaluation: "exampleMseReviewFormNum4MsitEvaluation",
  mseReviewFormNum4CsseEvaluation: "exampleMseReviewFormNum4CsseEvaluation",
  mseReviewFormNum5UserName: "exampleMseReviewFormNum5UserName",
  mseReviewFormNum5UserEmail: "exampleMseReviewFormNum5UserEmail",
  mseReviewFormNum5Started: "exampleMseReviewFormNum5Started",
  mseReviewFormNum5Submitted: "exampleMseReviewFormNum5Submitted",
  mseReviewFormNum5FromBin: "exampleMseReviewFormNum5FromBin",
  mseReviewFormNum5IntoBin: "exampleMseReviewFormNum5IntoBin",
  mseReviewFormNum5EnglishComments: "exampleMseReviewFormNum5EnglishComments",
  mseReviewFormNum5EnglishEvaluation:
    "exampleMseReviewFormNum5EnglishEvaluation",
  mseReviewFormNum5FoundationalKnowledgeComments:
    "exampleMseReviewFormNum5FoundationalKnowledgeComments",
  mseReviewFormNum5FoundationalKnowledgeEvaluation:
    "exampleMseReviewFormNum5FoundationalKnowledgeEvaluation",
  mseReviewFormNum5ExperienceComments:
    "exampleMseReviewFormNum5ExperienceComments",
  mseReviewFormNum5ExperienceEvaluation:
    "exampleMseReviewFormNum5ExperienceEvaluation",
  mseReviewFormNum5AbilityToProgramComments:
    "exampleMseReviewFormNum5AbilityToProgramComments",
  mseReviewFormNum5AbilityToProgramEvaluation:
    "exampleMseReviewFormNum5AbilityToProgramEvaluation",
  mseReviewFormNum5UnderstandingOfProgramComments:
    "exampleMseReviewFormNum5UnderstandingOfProgramComments",
  mseReviewFormNum5UnderstandingOfProgramEvaluation:
    "exampleMseReviewFormNum5UnderstandingOfProgramEvaluation",
  mseReviewFormNum5MaturityLeadershpComments:
    "exampleMseReviewFormNum5MaturityLeadershpComments",
  mseReviewFormNum5MaturityLeadershipEvaluation:
    "exampleMseReviewFormNum5MaturityLeadershipEvaluation",
  mseReviewFormNum5Comments: "exampleMseReviewFormNum5Comments",
  mseReviewFormNum5RiskFactors: "exampleMseReviewFormNum5RiskFactors",
  mseReviewFormNum5OtherRiskFactors: "exampleMseReviewFormNum5OtherRiskFactors",
  mseReviewFormNum5MseEvaluation: "exampleMseReviewFormNum5MseEvaluation",
  mseReviewFormNum5MsitEvaluation: "exampleMseReviewFormNum5MsitEvaluation",
  mseReviewFormNum5CsseEvaluation: "exampleMseReviewFormNum5CsseEvaluation",
  id: "exampleId",
};

const service = {
  createSlateReview() {
    return CREATE_RESULT;
  },
  slateReviews: () => FIND_MANY_RESULT,
  slateReview: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SlateReview", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SlateReviewService,
          useValue: service,
        },
      ],
      controllers: [SlateReviewController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /slateReviews", async () => {
    await request(app.getHttpServer())
      .post("/slateReviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /slateReviews", async () => {
    await request(app.getHttpServer())
      .get("/slateReviews")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /slateReviews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateReviews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /slateReviews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/slateReviews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /slateReviews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/slateReviews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/slateReviews")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
