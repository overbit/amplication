import * as graphql from "@nestjs/graphql";
import { SlateProgramsMseReviewedResolverBase } from "./base/slateProgramsMseReviewed.resolver.base";
import { SlateProgramsMseReviewed } from "./base/SlateProgramsMseReviewed";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";

@graphql.Resolver(() => SlateProgramsMseReviewed)
export class SlateProgramsMseReviewedResolver extends SlateProgramsMseReviewedResolverBase {
  constructor(protected readonly service: SlateProgramsMseReviewedService) {
    super(service);
  }
}
