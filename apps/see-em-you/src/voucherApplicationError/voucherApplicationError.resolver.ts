import * as graphql from "@nestjs/graphql";
import { VoucherApplicationErrorResolverBase } from "./base/voucherApplicationError.resolver.base";
import { VoucherApplicationError } from "./base/VoucherApplicationError";
import { VoucherApplicationErrorService } from "./voucherApplicationError.service";

@graphql.Resolver(() => VoucherApplicationError)
export class VoucherApplicationErrorResolver extends VoucherApplicationErrorResolverBase {
  constructor(protected readonly service: VoucherApplicationErrorService) {
    super(service);
  }
}
