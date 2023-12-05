import { Module } from "@nestjs/common";
import { MhciPrereqsReviewerModuleBase } from "./base/mhciPrereqsReviewer.module.base";
import { MhciPrereqsReviewerService } from "./mhciPrereqsReviewer.service";
import { MhciPrereqsReviewerController } from "./mhciPrereqsReviewer.controller";
import { MhciPrereqsReviewerResolver } from "./mhciPrereqsReviewer.resolver";

@Module({
  imports: [MhciPrereqsReviewerModuleBase],
  controllers: [MhciPrereqsReviewerController],
  providers: [MhciPrereqsReviewerService, MhciPrereqsReviewerResolver],
  exports: [MhciPrereqsReviewerService],
})
export class MhciPrereqsReviewerModule {}
