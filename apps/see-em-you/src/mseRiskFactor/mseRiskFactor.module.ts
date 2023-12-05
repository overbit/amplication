import { Module } from "@nestjs/common";
import { MseRiskFactorModuleBase } from "./base/mseRiskFactor.module.base";
import { MseRiskFactorService } from "./mseRiskFactor.service";
import { MseRiskFactorController } from "./mseRiskFactor.controller";
import { MseRiskFactorResolver } from "./mseRiskFactor.resolver";

@Module({
  imports: [MseRiskFactorModuleBase],
  controllers: [MseRiskFactorController],
  providers: [MseRiskFactorService, MseRiskFactorResolver],
  exports: [MseRiskFactorService],
})
export class MseRiskFactorModule {}
