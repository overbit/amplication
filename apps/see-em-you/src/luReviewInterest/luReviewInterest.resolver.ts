import * as graphql from "@nestjs/graphql";
import { LuReviewInterestResolverBase } from "./base/luReviewInterest.resolver.base";
import { LuReviewInterest } from "./base/LuReviewInterest";
import { LuReviewInterestService } from "./luReviewInterest.service";

@graphql.Resolver(() => LuReviewInterest)
export class LuReviewInterestResolver extends LuReviewInterestResolverBase {
  constructor(protected readonly service: LuReviewInterestService) {
    super(service);
  }
}
