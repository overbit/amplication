import { Module } from "@nestjs/common";
import { SlateAppsMseReviewedModuleBase } from "./base/slateAppsMseReviewed.module.base";
import { SlateAppsMseReviewedService } from "./slateAppsMseReviewed.service";
import { SlateAppsMseReviewedController } from "./slateAppsMseReviewed.controller";
import { SlateAppsMseReviewedResolver } from "./slateAppsMseReviewed.resolver";

@Module({
  imports: [SlateAppsMseReviewedModuleBase],
  controllers: [SlateAppsMseReviewedController],
  providers: [SlateAppsMseReviewedService, SlateAppsMseReviewedResolver],
  exports: [SlateAppsMseReviewedService],
})
export class SlateAppsMseReviewedModule {}
