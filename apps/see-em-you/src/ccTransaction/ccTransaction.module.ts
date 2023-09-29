import { Module } from "@nestjs/common";
import { CcTransactionModuleBase } from "./base/ccTransaction.module.base";
import { CcTransactionService } from "./ccTransaction.service";
import { CcTransactionController } from "./ccTransaction.controller";
import { CcTransactionResolver } from "./ccTransaction.resolver";

@Module({
  imports: [CcTransactionModuleBase],
  controllers: [CcTransactionController],
  providers: [CcTransactionService, CcTransactionResolver],
  exports: [CcTransactionService],
})
export class CcTransactionModule {}
