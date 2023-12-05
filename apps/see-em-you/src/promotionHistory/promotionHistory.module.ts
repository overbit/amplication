import { Module } from "@nestjs/common";
import { PromotionHistoryModuleBase } from "./base/promotionHistory.module.base";
import { PromotionHistoryService } from "./promotionHistory.service";
import { PromotionHistoryController } from "./promotionHistory.controller";
import { PromotionHistoryResolver } from "./promotionHistory.resolver";

@Module({
  imports: [PromotionHistoryModuleBase],
  controllers: [PromotionHistoryController],
  providers: [PromotionHistoryService, PromotionHistoryResolver],
  exports: [PromotionHistoryService],
})
export class PromotionHistoryModule {}
