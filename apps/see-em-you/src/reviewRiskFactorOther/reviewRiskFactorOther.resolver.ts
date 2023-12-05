import * as graphql from "@nestjs/graphql";
import { ReviewRiskFactorOtherResolverBase } from "./base/reviewRiskFactorOther.resolver.base";
import { ReviewRiskFactorOther } from "./base/ReviewRiskFactorOther";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";

@graphql.Resolver(() => ReviewRiskFactorOther)
export class ReviewRiskFactorOtherResolver extends ReviewRiskFactorOtherResolverBase {
  constructor(protected readonly service: ReviewRiskFactorOtherService) {
    super(service);
  }
}
