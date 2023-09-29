import { Module } from "@nestjs/common";
import { CcTransactionReportModuleBase } from "./base/ccTransactionReport.module.base";
import { CcTransactionReportService } from "./ccTransactionReport.service";
import { CcTransactionReportController } from "./ccTransactionReport.controller";
import { CcTransactionReportResolver } from "./ccTransactionReport.resolver";

@Module({
  imports: [CcTransactionReportModuleBase],
  controllers: [CcTransactionReportController],
  providers: [CcTransactionReportService, CcTransactionReportResolver],
  exports: [CcTransactionReportService],
})
export class CcTransactionReportModule {}
