import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";
import { ReviewIniExperienceScaleControllerBase } from "./base/reviewIniExperienceScale.controller.base";

@swagger.ApiTags("reviewIniExperienceScales")
@common.Controller("reviewIniExperienceScales")
export class ReviewIniExperienceScaleController extends ReviewIniExperienceScaleControllerBase {
  constructor(protected readonly service: ReviewIniExperienceScaleService) {
    super(service);
  }
}
