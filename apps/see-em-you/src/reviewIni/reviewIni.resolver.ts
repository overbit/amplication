import * as graphql from "@nestjs/graphql";
import { ReviewIniResolverBase } from "./base/reviewIni.resolver.base";
import { ReviewIni } from "./base/ReviewIni";
import { ReviewIniService } from "./reviewIni.service";

@graphql.Resolver(() => ReviewIni)
export class ReviewIniResolver extends ReviewIniResolverBase {
  constructor(protected readonly service: ReviewIniService) {
    super(service);
  }
}
