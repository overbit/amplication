import * as graphql from "@nestjs/graphql";
import { ReviewRiskFactorResolverBase } from "./base/reviewRiskFactor.resolver.base";
import { ReviewRiskFactor } from "./base/ReviewRiskFactor";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";

@graphql.Resolver(() => ReviewRiskFactor)
export class ReviewRiskFactorResolver extends ReviewRiskFactorResolverBase {
  constructor(protected readonly service: ReviewRiskFactorService) {
    super(service);
  }
}
