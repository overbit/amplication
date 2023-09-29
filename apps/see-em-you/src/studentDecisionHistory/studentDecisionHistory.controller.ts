import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDecisionHistoryService } from "./studentDecisionHistory.service";
import { StudentDecisionHistoryControllerBase } from "./base/studentDecisionHistory.controller.base";

@swagger.ApiTags("studentDecisionHistories")
@common.Controller("studentDecisionHistories")
export class StudentDecisionHistoryController extends StudentDecisionHistoryControllerBase {
  constructor(protected readonly service: StudentDecisionHistoryService) {
    super(service);
  }
}
