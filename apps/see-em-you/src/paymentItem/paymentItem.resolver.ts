import * as graphql from "@nestjs/graphql";
import { PaymentItemResolverBase } from "./base/paymentItem.resolver.base";
import { PaymentItem } from "./base/PaymentItem";
import { PaymentItemService } from "./paymentItem.service";

@graphql.Resolver(() => PaymentItem)
export class PaymentItemResolver extends PaymentItemResolverBase {
  constructor(protected readonly service: PaymentItemService) {
    super(service);
  }
}
