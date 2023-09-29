import { Module } from "@nestjs/common";
import { ReviewRiskFactorOtherModuleBase } from "./base/reviewRiskFactorOther.module.base";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";
import { ReviewRiskFactorOtherController } from "./reviewRiskFactorOther.controller";
import { ReviewRiskFactorOtherResolver } from "./reviewRiskFactorOther.resolver";

@Module({
  imports: [ReviewRiskFactorOtherModuleBase],
  controllers: [ReviewRiskFactorOtherController],
  providers: [ReviewRiskFactorOtherService, ReviewRiskFactorOtherResolver],
  exports: [ReviewRiskFactorOtherService],
})
export class ReviewRiskFactorOtherModule {}
