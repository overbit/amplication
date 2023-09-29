import * as graphql from "@nestjs/graphql";
import { PaymentNewResolverBase } from "./base/paymentNew.resolver.base";
import { PaymentNew } from "./base/PaymentNew";
import { PaymentNewService } from "./paymentNew.service";

@graphql.Resolver(() => PaymentNew)
export class PaymentNewResolver extends PaymentNewResolverBase {
  constructor(protected readonly service: PaymentNewService) {
    super(service);
  }
}
