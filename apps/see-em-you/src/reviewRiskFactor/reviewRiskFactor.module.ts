import { Module } from "@nestjs/common";
import { ReviewRiskFactorModuleBase } from "./base/reviewRiskFactor.module.base";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";
import { ReviewRiskFactorController } from "./reviewRiskFactor.controller";
import { ReviewRiskFactorResolver } from "./reviewRiskFactor.resolver";

@Module({
  imports: [ReviewRiskFactorModuleBase],
  controllers: [ReviewRiskFactorController],
  providers: [ReviewRiskFactorService, ReviewRiskFactorResolver],
  exports: [ReviewRiskFactorService],
})
export class ReviewRiskFactorModule {}
