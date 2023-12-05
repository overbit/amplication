import { Module } from "@nestjs/common";
import { LuProgramsRecommendationModuleBase } from "./base/luProgramsRecommendation.module.base";
import { LuProgramsRecommendationService } from "./luProgramsRecommendation.service";
import { LuProgramsRecommendationController } from "./luProgramsRecommendation.controller";
import { LuProgramsRecommendationResolver } from "./luProgramsRecommendation.resolver";

@Module({
  imports: [LuProgramsRecommendationModuleBase],
  controllers: [LuProgramsRecommendationController],
  providers: [
    LuProgramsRecommendationService,
    LuProgramsRecommendationResolver,
  ],
  exports: [LuProgramsRecommendationService],
})
export class LuProgramsRecommendationModule {}
