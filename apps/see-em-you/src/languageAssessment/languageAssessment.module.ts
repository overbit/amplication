import { Module } from "@nestjs/common";
import { LanguageAssessmentModuleBase } from "./base/languageAssessment.module.base";
import { LanguageAssessmentService } from "./languageAssessment.service";
import { LanguageAssessmentController } from "./languageAssessment.controller";
import { LanguageAssessmentResolver } from "./languageAssessment.resolver";

@Module({
  imports: [LanguageAssessmentModuleBase],
  controllers: [LanguageAssessmentController],
  providers: [LanguageAssessmentService, LanguageAssessmentResolver],
  exports: [LanguageAssessmentService],
})
export class LanguageAssessmentModule {}
