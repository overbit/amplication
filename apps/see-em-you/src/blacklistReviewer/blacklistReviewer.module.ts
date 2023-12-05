import { Module } from "@nestjs/common";
import { BlacklistReviewerModuleBase } from "./base/blacklistReviewer.module.base";
import { BlacklistReviewerService } from "./blacklistReviewer.service";
import { BlacklistReviewerController } from "./blacklistReviewer.controller";
import { BlacklistReviewerResolver } from "./blacklistReviewer.resolver";

@Module({
  imports: [BlacklistReviewerModuleBase],
  controllers: [BlacklistReviewerController],
  providers: [BlacklistReviewerService, BlacklistReviewerResolver],
  exports: [BlacklistReviewerService],
})
export class BlacklistReviewerModule {}
