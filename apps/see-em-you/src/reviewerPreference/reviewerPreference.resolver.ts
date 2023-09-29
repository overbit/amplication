import * as graphql from "@nestjs/graphql";
import { ReviewerPreferenceResolverBase } from "./base/reviewerPreference.resolver.base";
import { ReviewerPreference } from "./base/ReviewerPreference";
import { ReviewerPreferenceService } from "./reviewerPreference.service";

@graphql.Resolver(() => ReviewerPreference)
export class ReviewerPreferenceResolver extends ReviewerPreferenceResolverBase {
  constructor(protected readonly service: ReviewerPreferenceService) {
    super(service);
  }
}
