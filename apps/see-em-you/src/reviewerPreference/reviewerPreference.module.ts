import { Module } from "@nestjs/common";
import { ReviewerPreferenceModuleBase } from "./base/reviewerPreference.module.base";
import { ReviewerPreferenceService } from "./reviewerPreference.service";
import { ReviewerPreferenceController } from "./reviewerPreference.controller";
import { ReviewerPreferenceResolver } from "./reviewerPreference.resolver";

@Module({
  imports: [ReviewerPreferenceModuleBase],
  controllers: [ReviewerPreferenceController],
  providers: [ReviewerPreferenceService, ReviewerPreferenceResolver],
  exports: [ReviewerPreferenceService],
})
export class ReviewerPreferenceModule {}
