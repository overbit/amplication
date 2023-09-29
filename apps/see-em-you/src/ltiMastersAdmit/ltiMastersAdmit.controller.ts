import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LtiMastersAdmitService } from "./ltiMastersAdmit.service";
import { LtiMastersAdmitControllerBase } from "./base/ltiMastersAdmit.controller.base";

@swagger.ApiTags("ltiMastersAdmits")
@common.Controller("ltiMastersAdmits")
export class LtiMastersAdmitController extends LtiMastersAdmitControllerBase {
  constructor(protected readonly service: LtiMastersAdmitService) {
    super(service);
  }
}
