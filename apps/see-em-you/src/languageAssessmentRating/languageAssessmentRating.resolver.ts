import * as graphql from "@nestjs/graphql";
import { LanguageAssessmentRatingResolverBase } from "./base/languageAssessmentRating.resolver.base";
import { LanguageAssessmentRating } from "./base/LanguageAssessmentRating";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";

@graphql.Resolver(() => LanguageAssessmentRating)
export class LanguageAssessmentRatingResolver extends LanguageAssessmentRatingResolverBase {
  constructor(protected readonly service: LanguageAssessmentRatingService) {
    super(service);
  }
}
