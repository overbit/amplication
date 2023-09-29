import { Module } from "@nestjs/common";
import { VoucherApplicationModuleBase } from "./base/voucherApplication.module.base";
import { VoucherApplicationService } from "./voucherApplication.service";
import { VoucherApplicationController } from "./voucherApplication.controller";
import { VoucherApplicationResolver } from "./voucherApplication.resolver";

@Module({
  imports: [VoucherApplicationModuleBase],
  controllers: [VoucherApplicationController],
  providers: [VoucherApplicationService, VoucherApplicationResolver],
  exports: [VoucherApplicationService],
})
export class VoucherApplicationModule {}
