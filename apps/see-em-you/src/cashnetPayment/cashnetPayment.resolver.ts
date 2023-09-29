import * as graphql from "@nestjs/graphql";
import { CashnetPaymentResolverBase } from "./base/cashnetPayment.resolver.base";
import { CashnetPayment } from "./base/CashnetPayment";
import { CashnetPaymentService } from "./cashnetPayment.service";

@graphql.Resolver(() => CashnetPayment)
export class CashnetPaymentResolver extends CashnetPaymentResolverBase {
  constructor(protected readonly service: CashnetPaymentService) {
    super(service);
  }
}
