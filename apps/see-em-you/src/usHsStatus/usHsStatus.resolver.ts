import * as graphql from "@nestjs/graphql";
import { UsHsStatusResolverBase } from "./base/usHsStatus.resolver.base";
import { UsHsStatus } from "./base/UsHsStatus";
import { UsHsStatusService } from "./usHsStatus.service";

@graphql.Resolver(() => UsHsStatus)
export class UsHsStatusResolver extends UsHsStatusResolverBase {
  constructor(protected readonly service: UsHsStatusService) {
    super(service);
  }
}
