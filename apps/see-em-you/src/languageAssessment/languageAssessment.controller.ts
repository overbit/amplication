import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LanguageAssessmentService } from "./languageAssessment.service";
import { LanguageAssessmentControllerBase } from "./base/languageAssessment.controller.base";

@swagger.ApiTags("languageAssessments")
@common.Controller("languageAssessments")
export class LanguageAssessmentController extends LanguageAssessmentControllerBase {
  constructor(protected readonly service: LanguageAssessmentService) {
    super(service);
  }
}
