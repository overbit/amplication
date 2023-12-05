import { Module } from "@nestjs/common";
import { RecommendformModuleBase } from "./base/recommendform.module.base";
import { RecommendformService } from "./recommendform.service";
import { RecommendformController } from "./recommendform.controller";
import { RecommendformResolver } from "./recommendform.resolver";

@Module({
  imports: [RecommendformModuleBase],
  controllers: [RecommendformController],
  providers: [RecommendformService, RecommendformResolver],
  exports: [RecommendformService],
})
export class RecommendformModule {}
