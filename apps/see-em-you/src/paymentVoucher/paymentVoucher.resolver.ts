import * as graphql from "@nestjs/graphql";
import { PaymentVoucherResolverBase } from "./base/paymentVoucher.resolver.base";
import { PaymentVoucher } from "./base/PaymentVoucher";
import { PaymentVoucherService } from "./paymentVoucher.service";

@graphql.Resolver(() => PaymentVoucher)
export class PaymentVoucherResolver extends PaymentVoucherResolverBase {
  constructor(protected readonly service: PaymentVoucherService) {
    super(service);
  }
}
