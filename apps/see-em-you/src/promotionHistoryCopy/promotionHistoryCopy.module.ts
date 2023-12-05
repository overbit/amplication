import { Module } from "@nestjs/common";
import { PromotionHistoryCopyModuleBase } from "./base/promotionHistoryCopy.module.base";
import { PromotionHistoryCopyService } from "./promotionHistoryCopy.service";
import { PromotionHistoryCopyController } from "./promotionHistoryCopy.controller";
import { PromotionHistoryCopyResolver } from "./promotionHistoryCopy.resolver";

@Module({
  imports: [PromotionHistoryCopyModuleBase],
  controllers: [PromotionHistoryCopyController],
  providers: [PromotionHistoryCopyService, PromotionHistoryCopyResolver],
  exports: [PromotionHistoryCopyService],
})
export class PromotionHistoryCopyModule {}
