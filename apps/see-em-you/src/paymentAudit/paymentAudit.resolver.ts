import * as graphql from "@nestjs/graphql";
import { PaymentAuditResolverBase } from "./base/paymentAudit.resolver.base";
import { PaymentAudit } from "./base/PaymentAudit";
import { PaymentAuditService } from "./paymentAudit.service";

@graphql.Resolver(() => PaymentAudit)
export class PaymentAuditResolver extends PaymentAuditResolverBase {
  constructor(protected readonly service: PaymentAuditService) {
    super(service);
  }
}
