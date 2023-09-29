import * as graphql from "@nestjs/graphql";
import { LanguageAssessmentResolverBase } from "./base/languageAssessment.resolver.base";
import { LanguageAssessment } from "./base/LanguageAssessment";
import { LanguageAssessmentService } from "./languageAssessment.service";

@graphql.Resolver(() => LanguageAssessment)
export class LanguageAssessmentResolver extends LanguageAssessmentResolverBase {
  constructor(protected readonly service: LanguageAssessmentService) {
    super(service);
  }
}
