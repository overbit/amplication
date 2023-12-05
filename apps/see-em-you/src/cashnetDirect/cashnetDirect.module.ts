import { Module } from "@nestjs/common";
import { CashnetDirectModuleBase } from "./base/cashnetDirect.module.base";
import { CashnetDirectService } from "./cashnetDirect.service";
import { CashnetDirectController } from "./cashnetDirect.controller";
import { CashnetDirectResolver } from "./cashnetDirect.resolver";

@Module({
  imports: [CashnetDirectModuleBase],
  controllers: [CashnetDirectController],
  providers: [CashnetDirectService, CashnetDirectResolver],
  exports: [CashnetDirectService],
})
export class CashnetDirectModule {}
