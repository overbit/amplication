import * as graphql from "@nestjs/graphql";
import { ReviewIniOverallScaleResolverBase } from "./base/reviewIniOverallScale.resolver.base";
import { ReviewIniOverallScale } from "./base/ReviewIniOverallScale";
import { ReviewIniOverallScaleService } from "./reviewIniOverallScale.service";

@graphql.Resolver(() => ReviewIniOverallScale)
export class ReviewIniOverallScaleResolver extends ReviewIniOverallScaleResolverBase {
  constructor(protected readonly service: ReviewIniOverallScaleService) {
    super(service);
  }
}
