import * as graphql from "@nestjs/graphql";
import { MhciPrereqsReviewerResolverBase } from "./base/mhciPrereqsReviewer.resolver.base";
import { MhciPrereqsReviewer } from "./base/MhciPrereqsReviewer";
import { MhciPrereqsReviewerService } from "./mhciPrereqsReviewer.service";

@graphql.Resolver(() => MhciPrereqsReviewer)
export class MhciPrereqsReviewerResolver extends MhciPrereqsReviewerResolverBase {
  constructor(protected readonly service: MhciPrereqsReviewerService) {
    super(service);
  }
}
