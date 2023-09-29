import * as graphql from "@nestjs/graphql";
import { RejectionWaiverResolverBase } from "./base/rejectionWaiver.resolver.base";
import { RejectionWaiver } from "./base/RejectionWaiver";
import { RejectionWaiverService } from "./rejectionWaiver.service";

@graphql.Resolver(() => RejectionWaiver)
export class RejectionWaiverResolver extends RejectionWaiverResolverBase {
  constructor(protected readonly service: RejectionWaiverService) {
    super(service);
  }
}
