import { Module } from "@nestjs/common";
import { LangProfRecommenderInfoModuleBase } from "./base/langProfRecommenderInfo.module.base";
import { LangProfRecommenderInfoService } from "./langProfRecommenderInfo.service";
import { LangProfRecommenderInfoController } from "./langProfRecommenderInfo.controller";
import { LangProfRecommenderInfoResolver } from "./langProfRecommenderInfo.resolver";

@Module({
  imports: [LangProfRecommenderInfoModuleBase],
  controllers: [LangProfRecommenderInfoController],
  providers: [LangProfRecommenderInfoService, LangProfRecommenderInfoResolver],
  exports: [LangProfRecommenderInfoService],
})
export class LangProfRecommenderInfoModule {}
