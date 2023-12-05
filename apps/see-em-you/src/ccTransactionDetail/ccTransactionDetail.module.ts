import { Module } from "@nestjs/common";
import { CcTransactionDetailModuleBase } from "./base/ccTransactionDetail.module.base";
import { CcTransactionDetailService } from "./ccTransactionDetail.service";
import { CcTransactionDetailController } from "./ccTransactionDetail.controller";
import { CcTransactionDetailResolver } from "./ccTransactionDetail.resolver";

@Module({
  imports: [CcTransactionDetailModuleBase],
  controllers: [CcTransactionDetailController],
  providers: [CcTransactionDetailService, CcTransactionDetailResolver],
  exports: [CcTransactionDetailService],
})
export class CcTransactionDetailModule {}
