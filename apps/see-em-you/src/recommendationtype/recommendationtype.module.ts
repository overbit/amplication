import { Module } from "@nestjs/common";
import { RecommendationtypeModuleBase } from "./base/recommendationtype.module.base";
import { RecommendationtypeService } from "./recommendationtype.service";
import { RecommendationtypeController } from "./recommendationtype.controller";
import { RecommendationtypeResolver } from "./recommendationtype.resolver";

@Module({
  imports: [RecommendationtypeModuleBase],
  controllers: [RecommendationtypeController],
  providers: [RecommendationtypeService, RecommendationtypeResolver],
  exports: [RecommendationtypeService],
})
export class RecommendationtypeModule {}
