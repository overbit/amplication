import * as graphql from "@nestjs/graphql";
import { ReviewPositiveFactorResolverBase } from "./base/reviewPositiveFactor.resolver.base";
import { ReviewPositiveFactor } from "./base/ReviewPositiveFactor";
import { ReviewPositiveFactorService } from "./reviewPositiveFactor.service";

@graphql.Resolver(() => ReviewPositiveFactor)
export class ReviewPositiveFactorResolver extends ReviewPositiveFactorResolverBase {
  constructor(protected readonly service: ReviewPositiveFactorService) {
    super(service);
  }
}
