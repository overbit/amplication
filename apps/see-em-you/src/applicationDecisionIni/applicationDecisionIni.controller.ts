import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationDecisionIniService } from "./applicationDecisionIni.service";
import { ApplicationDecisionIniControllerBase } from "./base/applicationDecisionIni.controller.base";

@swagger.ApiTags("applicationDecisionInis")
@common.Controller("applicationDecisionInis")
export class ApplicationDecisionIniController extends ApplicationDecisionIniControllerBase {
  constructor(protected readonly service: ApplicationDecisionIniService) {
    super(service);
  }
}
