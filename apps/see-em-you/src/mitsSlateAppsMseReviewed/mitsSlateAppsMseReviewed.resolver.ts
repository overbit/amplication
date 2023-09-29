import * as graphql from "@nestjs/graphql";
import { MitsSlateAppsMseReviewedResolverBase } from "./base/mitsSlateAppsMseReviewed.resolver.base";
import { MitsSlateAppsMseReviewed } from "./base/MitsSlateAppsMseReviewed";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";

@graphql.Resolver(() => MitsSlateAppsMseReviewed)
export class MitsSlateAppsMseReviewedResolver extends MitsSlateAppsMseReviewedResolverBase {
  constructor(protected readonly service: MitsSlateAppsMseReviewedService) {
    super(service);
  }
}
