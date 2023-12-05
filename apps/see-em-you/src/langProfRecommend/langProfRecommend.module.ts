import { Module } from "@nestjs/common";
import { LangProfRecommendModuleBase } from "./base/langProfRecommend.module.base";
import { LangProfRecommendService } from "./langProfRecommend.service";
import { LangProfRecommendController } from "./langProfRecommend.controller";
import { LangProfRecommendResolver } from "./langProfRecommend.resolver";

@Module({
  imports: [LangProfRecommendModuleBase],
  controllers: [LangProfRecommendController],
  providers: [LangProfRecommendService, LangProfRecommendResolver],
  exports: [LangProfRecommendService],
})
export class LangProfRecommendModule {}
