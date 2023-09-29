import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";
import { MseBridgeCourseDecisionControllerBase } from "./base/mseBridgeCourseDecision.controller.base";

@swagger.ApiTags("mseBridgeCourseDecisions")
@common.Controller("mseBridgeCourseDecisions")
export class MseBridgeCourseDecisionController extends MseBridgeCourseDecisionControllerBase {
  constructor(protected readonly service: MseBridgeCourseDecisionService) {
    super(service);
  }
}
