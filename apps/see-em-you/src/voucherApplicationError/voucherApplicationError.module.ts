import { Module } from "@nestjs/common";
import { VoucherApplicationErrorModuleBase } from "./base/voucherApplicationError.module.base";
import { VoucherApplicationErrorService } from "./voucherApplicationError.service";
import { VoucherApplicationErrorController } from "./voucherApplicationError.controller";
import { VoucherApplicationErrorResolver } from "./voucherApplicationError.resolver";

@Module({
  imports: [VoucherApplicationErrorModuleBase],
  controllers: [VoucherApplicationErrorController],
  providers: [VoucherApplicationErrorService, VoucherApplicationErrorResolver],
  exports: [VoucherApplicationErrorService],
})
export class VoucherApplicationErrorModule {}
