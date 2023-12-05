import * as graphql from "@nestjs/graphql";
import { ReviewIniExperienceScaleResolverBase } from "./base/reviewIniExperienceScale.resolver.base";
import { ReviewIniExperienceScale } from "./base/ReviewIniExperienceScale";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";

@graphql.Resolver(() => ReviewIniExperienceScale)
export class ReviewIniExperienceScaleResolver extends ReviewIniExperienceScaleResolverBase {
  constructor(protected readonly service: ReviewIniExperienceScaleService) {
    super(service);
  }
}
