import { Module } from "@nestjs/common";
import { VoucherProgramModuleBase } from "./base/voucherProgram.module.base";
import { VoucherProgramService } from "./voucherProgram.service";
import { VoucherProgramController } from "./voucherProgram.controller";
import { VoucherProgramResolver } from "./voucherProgram.resolver";

@Module({
  imports: [VoucherProgramModuleBase],
  controllers: [VoucherProgramController],
  providers: [VoucherProgramService, VoucherProgramResolver],
  exports: [VoucherProgramService],
})
export class VoucherProgramModule {}
