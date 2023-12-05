import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";
import { RegistrationFeeStatusControllerBase } from "./base/registrationFeeStatus.controller.base";

@swagger.ApiTags("registrationFeeStatuses")
@common.Controller("registrationFeeStatuses")
export class RegistrationFeeStatusController extends RegistrationFeeStatusControllerBase {
  constructor(protected readonly service: RegistrationFeeStatusService) {
    super(service);
  }
}
