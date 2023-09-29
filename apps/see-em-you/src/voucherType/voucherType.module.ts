import { Module } from "@nestjs/common";
import { VoucherTypeModuleBase } from "./base/voucherType.module.base";
import { VoucherTypeService } from "./voucherType.service";
import { VoucherTypeController } from "./voucherType.controller";
import { VoucherTypeResolver } from "./voucherType.resolver";

@Module({
  imports: [VoucherTypeModuleBase],
  controllers: [VoucherTypeController],
  providers: [VoucherTypeService, VoucherTypeResolver],
  exports: [VoucherTypeService],
})
export class VoucherTypeModule {}
