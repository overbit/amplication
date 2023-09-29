import { Module } from "@nestjs/common";
import { SlateReviewModuleBase } from "./base/slateReview.module.base";
import { SlateReviewService } from "./slateReview.service";
import { SlateReviewController } from "./slateReview.controller";
import { SlateReviewResolver } from "./slateReview.resolver";

@Module({
  imports: [SlateReviewModuleBase],
  controllers: [SlateReviewController],
  providers: [SlateReviewService, SlateReviewResolver],
  exports: [SlateReviewService],
})
export class SlateReviewModule {}
