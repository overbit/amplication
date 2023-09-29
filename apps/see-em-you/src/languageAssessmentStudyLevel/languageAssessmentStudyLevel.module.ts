import { Module } from "@nestjs/common";
import { LanguageAssessmentStudyLevelModuleBase } from "./base/languageAssessmentStudyLevel.module.base";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";
import { LanguageAssessmentStudyLevelController } from "./languageAssessmentStudyLevel.controller";
import { LanguageAssessmentStudyLevelResolver } from "./languageAssessmentStudyLevel.resolver";

@Module({
  imports: [LanguageAssessmentStudyLevelModuleBase],
  controllers: [LanguageAssessmentStudyLevelController],
  providers: [
    LanguageAssessmentStudyLevelService,
    LanguageAssessmentStudyLevelResolver,
  ],
  exports: [LanguageAssessmentStudyLevelService],
})
export class LanguageAssessmentStudyLevelModule {}
