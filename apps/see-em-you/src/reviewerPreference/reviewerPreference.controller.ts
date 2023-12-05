import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewerPreferenceService } from "./reviewerPreference.service";
import { ReviewerPreferenceControllerBase } from "./base/reviewerPreference.controller.base";

@swagger.ApiTags("reviewerPreferences")
@common.Controller("reviewerPreferences")
export class ReviewerPreferenceController extends ReviewerPreferenceControllerBase {
  constructor(protected readonly service: ReviewerPreferenceService) {
    super(service);
  }
}
