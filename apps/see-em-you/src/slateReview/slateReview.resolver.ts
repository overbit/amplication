import * as graphql from "@nestjs/graphql";
import { SlateReviewResolverBase } from "./base/slateReview.resolver.base";
import { SlateReview } from "./base/SlateReview";
import { SlateReviewService } from "./slateReview.service";

@graphql.Resolver(() => SlateReview)
export class SlateReviewResolver extends SlateReviewResolverBase {
  constructor(protected readonly service: SlateReviewService) {
    super(service);
  }
}
