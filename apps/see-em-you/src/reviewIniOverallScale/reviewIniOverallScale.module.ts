import { Module } from "@nestjs/common";
import { ReviewIniOverallScaleModuleBase } from "./base/reviewIniOverallScale.module.base";
import { ReviewIniOverallScaleService } from "./reviewIniOverallScale.service";
import { ReviewIniOverallScaleController } from "./reviewIniOverallScale.controller";
import { ReviewIniOverallScaleResolver } from "./reviewIniOverallScale.resolver";

@Module({
  imports: [ReviewIniOverallScaleModuleBase],
  controllers: [ReviewIniOverallScaleController],
  providers: [ReviewIniOverallScaleService, ReviewIniOverallScaleResolver],
  exports: [ReviewIniOverallScaleService],
})
export class ReviewIniOverallScaleModule {}
