import { Module } from "@nestjs/common";
import { MitsSlateReviewModuleBase } from "./base/mitsSlateReview.module.base";
import { MitsSlateReviewService } from "./mitsSlateReview.service";
import { MitsSlateReviewController } from "./mitsSlateReview.controller";
import { MitsSlateReviewResolver } from "./mitsSlateReview.resolver";

@Module({
  imports: [MitsSlateReviewModuleBase],
  controllers: [MitsSlateReviewController],
  providers: [MitsSlateReviewService, MitsSlateReviewResolver],
  exports: [MitsSlateReviewService],
})
export class MitsSlateReviewModule {}
