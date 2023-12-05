import { Module } from "@nestjs/common";
import { MitsSlateAppsMseReviewedModuleBase } from "./base/mitsSlateAppsMseReviewed.module.base";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";
import { MitsSlateAppsMseReviewedController } from "./mitsSlateAppsMseReviewed.controller";
import { MitsSlateAppsMseReviewedResolver } from "./mitsSlateAppsMseReviewed.resolver";

@Module({
  imports: [MitsSlateAppsMseReviewedModuleBase],
  controllers: [MitsSlateAppsMseReviewedController],
  providers: [
    MitsSlateAppsMseReviewedService,
    MitsSlateAppsMseReviewedResolver,
  ],
  exports: [MitsSlateAppsMseReviewedService],
})
export class MitsSlateAppsMseReviewedModule {}
