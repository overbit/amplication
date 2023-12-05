import { Module } from "@nestjs/common";
import { VoucherModuleBase } from "./base/voucher.module.base";
import { VoucherService } from "./voucher.service";
import { VoucherController } from "./voucher.controller";
import { VoucherResolver } from "./voucher.resolver";

@Module({
  imports: [VoucherModuleBase],
  controllers: [VoucherController],
  providers: [VoucherService, VoucherResolver],
  exports: [VoucherService],
})
export class VoucherModule {}
