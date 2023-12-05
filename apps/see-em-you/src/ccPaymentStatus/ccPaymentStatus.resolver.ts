import * as graphql from "@nestjs/graphql";
import { CcPaymentStatusResolverBase } from "./base/ccPaymentStatus.resolver.base";
import { CcPaymentStatus } from "./base/CcPaymentStatus";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";

@graphql.Resolver(() => CcPaymentStatus)
export class CcPaymentStatusResolver extends CcPaymentStatusResolverBase {
  constructor(protected readonly service: CcPaymentStatusService) {
    super(service);
  }
}
