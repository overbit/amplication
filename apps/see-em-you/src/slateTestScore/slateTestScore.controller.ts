import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateTestScoreService } from "./slateTestScore.service";
import { SlateTestScoreControllerBase } from "./base/slateTestScore.controller.base";

@swagger.ApiTags("slateTestScores")
@common.Controller("slateTestScores")
export class SlateTestScoreController extends SlateTestScoreControllerBase {
  constructor(protected readonly service: SlateTestScoreService) {
    super(service);
  }
}
