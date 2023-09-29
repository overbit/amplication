import * as graphql from "@nestjs/graphql";
import { LanguageAssessmentStudyLevelResolverBase } from "./base/languageAssessmentStudyLevel.resolver.base";
import { LanguageAssessmentStudyLevel } from "./base/LanguageAssessmentStudyLevel";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";

@graphql.Resolver(() => LanguageAssessmentStudyLevel)
export class LanguageAssessmentStudyLevelResolver extends LanguageAssessmentStudyLevelResolverBase {
  constructor(protected readonly service: LanguageAssessmentStudyLevelService) {
    super(service);
  }
}
