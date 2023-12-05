import * as graphql from "@nestjs/graphql";
import { MhciPrereqsStatusResolverBase } from "./base/mhciPrereqsStatus.resolver.base";
import { MhciPrereqsStatus } from "./base/MhciPrereqsStatus";
import { MhciPrereqsStatusService } from "./mhciPrereqsStatus.service";

@graphql.Resolver(() => MhciPrereqsStatus)
export class MhciPrereqsStatusResolver extends MhciPrereqsStatusResolverBase {
  constructor(protected readonly service: MhciPrereqsStatusService) {
    super(service);
  }
}
