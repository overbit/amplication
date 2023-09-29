import * as graphql from "@nestjs/graphql";
import { BlacklistReviewerResolverBase } from "./base/blacklistReviewer.resolver.base";
import { BlacklistReviewer } from "./base/BlacklistReviewer";
import { BlacklistReviewerService } from "./blacklistReviewer.service";

@graphql.Resolver(() => BlacklistReviewer)
export class BlacklistReviewerResolver extends BlacklistReviewerResolverBase {
  constructor(protected readonly service: BlacklistReviewerService) {
    super(service);
  }
}
