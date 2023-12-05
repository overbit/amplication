import { Module } from "@nestjs/common";
import { LanguageAssessmentRatingModuleBase } from "./base/languageAssessmentRating.module.base";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";
import { LanguageAssessmentRatingController } from "./languageAssessmentRating.controller";
import { LanguageAssessmentRatingResolver } from "./languageAssessmentRating.resolver";

@Module({
  imports: [LanguageAssessmentRatingModuleBase],
  controllers: [LanguageAssessmentRatingController],
  providers: [
    LanguageAssessmentRatingService,
    LanguageAssessmentRatingResolver,
  ],
  exports: [LanguageAssessmentRatingService],
})
export class LanguageAssessmentRatingModule {}
