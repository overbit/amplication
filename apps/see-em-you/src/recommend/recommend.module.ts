import { Module } from "@nestjs/common";
import { RecommendModuleBase } from "./base/recommend.module.base";
import { RecommendService } from "./recommend.service";
import { RecommendController } from "./recommend.controller";
import { RecommendResolver } from "./recommend.resolver";

@Module({
  imports: [RecommendModuleBase],
  controllers: [RecommendController],
  providers: [RecommendService, RecommendResolver],
  exports: [RecommendService],
})
export class RecommendModule {}
