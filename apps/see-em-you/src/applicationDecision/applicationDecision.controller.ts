import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationDecisionService } from "./applicationDecision.service";
import { ApplicationDecisionControllerBase } from "./base/applicationDecision.controller.base";

@swagger.ApiTags("applicationDecisions")
@common.Controller("applicationDecisions")
export class ApplicationDecisionController extends ApplicationDecisionControllerBase {
  constructor(protected readonly service: ApplicationDecisionService) {
    super(service);
  }
}
