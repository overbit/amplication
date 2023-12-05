import { Module } from "@nestjs/common";
import { PromotionStatusModuleBase } from "./base/promotionStatus.module.base";
import { PromotionStatusService } from "./promotionStatus.service";
import { PromotionStatusController } from "./promotionStatus.controller";
import { PromotionStatusResolver } from "./promotionStatus.resolver";

@Module({
  imports: [PromotionStatusModuleBase],
  controllers: [PromotionStatusController],
  providers: [PromotionStatusService, PromotionStatusResolver],
  exports: [PromotionStatusService],
})
export class PromotionStatusModule {}
