import * as graphql from "@nestjs/graphql";
import { VoucherApplicationResolverBase } from "./base/voucherApplication.resolver.base";
import { VoucherApplication } from "./base/VoucherApplication";
import { VoucherApplicationService } from "./voucherApplication.service";

@graphql.Resolver(() => VoucherApplication)
export class VoucherApplicationResolver extends VoucherApplicationResolverBase {
  constructor(protected readonly service: VoucherApplicationService) {
    super(service);
  }
}
