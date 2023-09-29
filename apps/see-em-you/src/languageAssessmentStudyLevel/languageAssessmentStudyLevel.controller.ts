import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";
import { LanguageAssessmentStudyLevelControllerBase } from "./base/languageAssessmentStudyLevel.controller.base";

@swagger.ApiTags("languageAssessmentStudyLevels")
@common.Controller("languageAssessmentStudyLevels")
export class LanguageAssessmentStudyLevelController extends LanguageAssessmentStudyLevelControllerBase {
  constructor(protected readonly service: LanguageAssessmentStudyLevelService) {
    super(service);
  }
}
