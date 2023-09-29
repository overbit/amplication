import * as graphql from "@nestjs/graphql";
import { VoucherTypeResolverBase } from "./base/voucherType.resolver.base";
import { VoucherType } from "./base/VoucherType";
import { VoucherTypeService } from "./voucherType.service";

@graphql.Resolver(() => VoucherType)
export class VoucherTypeResolver extends VoucherTypeResolverBase {
  constructor(protected readonly service: VoucherTypeService) {
    super(service);
  }
}
