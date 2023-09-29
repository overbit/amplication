import * as graphql from "@nestjs/graphql";
import { ReviewPositiveFactorOtherResolverBase } from "./base/reviewPositiveFactorOther.resolver.base";
import { ReviewPositiveFactorOther } from "./base/ReviewPositiveFactorOther";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";

@graphql.Resolver(() => ReviewPositiveFactorOther)
export class ReviewPositiveFactorOtherResolver extends ReviewPositiveFactorOtherResolverBase {
  constructor(protected readonly service: ReviewPositiveFactorOtherService) {
    super(service);
  }
}
