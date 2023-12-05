import { Module } from "@nestjs/common";
import { MitsSlateRecommendModuleBase } from "./base/mitsSlateRecommend.module.base";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";
import { MitsSlateRecommendController } from "./mitsSlateRecommend.controller";
import { MitsSlateRecommendResolver } from "./mitsSlateRecommend.resolver";

@Module({
  imports: [MitsSlateRecommendModuleBase],
  controllers: [MitsSlateRecommendController],
  providers: [MitsSlateRecommendService, MitsSlateRecommendResolver],
  exports: [MitsSlateRecommendService],
})
export class MitsSlateRecommendModule {}
