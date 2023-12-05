import * as graphql from "@nestjs/graphql";
import { SlateAppsMseReviewedResolverBase } from "./base/slateAppsMseReviewed.resolver.base";
import { SlateAppsMseReviewed } from "./base/SlateAppsMseReviewed";
import { SlateAppsMseReviewedService } from "./slateAppsMseReviewed.service";

@graphql.Resolver(() => SlateAppsMseReviewed)
export class SlateAppsMseReviewedResolver extends SlateAppsMseReviewedResolverBase {
  constructor(protected readonly service: SlateAppsMseReviewedService) {
    super(service);
  }
}
