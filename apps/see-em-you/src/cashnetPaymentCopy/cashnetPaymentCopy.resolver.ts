import * as graphql from "@nestjs/graphql";
import { CashnetPaymentCopyResolverBase } from "./base/cashnetPaymentCopy.resolver.base";
import { CashnetPaymentCopy } from "./base/CashnetPaymentCopy";
import { CashnetPaymentCopyService } from "./cashnetPaymentCopy.service";

@graphql.Resolver(() => CashnetPaymentCopy)
export class CashnetPaymentCopyResolver extends CashnetPaymentCopyResolverBase {
  constructor(protected readonly service: CashnetPaymentCopyService) {
    super(service);
  }
}
