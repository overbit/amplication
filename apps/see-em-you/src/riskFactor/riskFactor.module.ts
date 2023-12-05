import { Module } from "@nestjs/common";
import { RiskFactorModuleBase } from "./base/riskFactor.module.base";
import { RiskFactorService } from "./riskFactor.service";
import { RiskFactorController } from "./riskFactor.controller";
import { RiskFactorResolver } from "./riskFactor.resolver";

@Module({
  imports: [RiskFactorModuleBase],
  controllers: [RiskFactorController],
  providers: [RiskFactorService, RiskFactorResolver],
  exports: [RiskFactorService],
})
export class RiskFactorModule {}
