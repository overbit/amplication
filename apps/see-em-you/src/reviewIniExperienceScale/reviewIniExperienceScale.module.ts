import { Module } from "@nestjs/common";
import { ReviewIniExperienceScaleModuleBase } from "./base/reviewIniExperienceScale.module.base";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";
import { ReviewIniExperienceScaleController } from "./reviewIniExperienceScale.controller";
import { ReviewIniExperienceScaleResolver } from "./reviewIniExperienceScale.resolver";

@Module({
  imports: [ReviewIniExperienceScaleModuleBase],
  controllers: [ReviewIniExperienceScaleController],
  providers: [
    ReviewIniExperienceScaleService,
    ReviewIniExperienceScaleResolver,
  ],
  exports: [ReviewIniExperienceScaleService],
})
export class ReviewIniExperienceScaleModule {}
