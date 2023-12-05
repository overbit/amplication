import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";
import { LanguageAssessmentRatingControllerBase } from "./base/languageAssessmentRating.controller.base";

@swagger.ApiTags("languageAssessmentRatings")
@common.Controller("languageAssessmentRatings")
export class LanguageAssessmentRatingController extends LanguageAssessmentRatingControllerBase {
  constructor(protected readonly service: LanguageAssessmentRatingService) {
    super(service);
  }
}
