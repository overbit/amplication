import * as graphql from "@nestjs/graphql";
import { ReviewIniAdminResolverBase } from "./base/reviewIniAdmin.resolver.base";
import { ReviewIniAdmin } from "./base/ReviewIniAdmin";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";

@graphql.Resolver(() => ReviewIniAdmin)
export class ReviewIniAdminResolver extends ReviewIniAdminResolverBase {
  constructor(protected readonly service: ReviewIniAdminService) {
    super(service);
  }
}
