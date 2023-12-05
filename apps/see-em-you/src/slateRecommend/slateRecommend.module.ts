import { Module } from "@nestjs/common";
import { SlateRecommendModuleBase } from "./base/slateRecommend.module.base";
import { SlateRecommendService } from "./slateRecommend.service";
import { SlateRecommendController } from "./slateRecommend.controller";
import { SlateRecommendResolver } from "./slateRecommend.resolver";

@Module({
  imports: [SlateRecommendModuleBase],
  controllers: [SlateRecommendController],
  providers: [SlateRecommendService, SlateRecommendResolver],
  exports: [SlateRecommendService],
})
export class SlateRecommendModule {}
