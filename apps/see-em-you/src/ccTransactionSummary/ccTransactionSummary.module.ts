import { Module } from "@nestjs/common";
import { CcTransactionSummaryModuleBase } from "./base/ccTransactionSummary.module.base";
import { CcTransactionSummaryService } from "./ccTransactionSummary.service";
import { CcTransactionSummaryController } from "./ccTransactionSummary.controller";
import { CcTransactionSummaryResolver } from "./ccTransactionSummary.resolver";

@Module({
  imports: [CcTransactionSummaryModuleBase],
  controllers: [CcTransactionSummaryController],
  providers: [CcTransactionSummaryService, CcTransactionSummaryResolver],
  exports: [CcTransactionSummaryService],
})
export class CcTransactionSummaryModule {}
