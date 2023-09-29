import * as graphql from "@nestjs/graphql";
import { VoucherProgramResolverBase } from "./base/voucherProgram.resolver.base";
import { VoucherProgram } from "./base/VoucherProgram";
import { VoucherProgramService } from "./voucherProgram.service";

@graphql.Resolver(() => VoucherProgram)
export class VoucherProgramResolver extends VoucherProgramResolverBase {
  constructor(protected readonly service: VoucherProgramService) {
    super(service);
  }
}
