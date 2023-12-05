import * as graphql from "@nestjs/graphql";
import { VoucherResolverBase } from "./base/voucher.resolver.base";
import { Voucher } from "./base/Voucher";
import { VoucherService } from "./voucher.service";

@graphql.Resolver(() => Voucher)
export class VoucherResolver extends VoucherResolverBase {
  constructor(protected readonly service: VoucherService) {
    super(service);
  }
}
