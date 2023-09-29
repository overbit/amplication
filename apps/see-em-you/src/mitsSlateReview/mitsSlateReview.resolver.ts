import * as graphql from "@nestjs/graphql";
import { MitsSlateReviewResolverBase } from "./base/mitsSlateReview.resolver.base";
import { MitsSlateReview } from "./base/MitsSlateReview";
import { MitsSlateReviewService } from "./mitsSlateReview.service";

@graphql.Resolver(() => MitsSlateReview)
export class MitsSlateReviewResolver extends MitsSlateReviewResolverBase {
  constructor(protected readonly service: MitsSlateReviewService) {
    super(service);
  }
}
