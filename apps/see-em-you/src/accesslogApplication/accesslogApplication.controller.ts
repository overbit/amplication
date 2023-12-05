import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccesslogApplicationService } from "./accesslogApplication.service";
import { AccesslogApplicationControllerBase } from "./base/accesslogApplication.controller.base";

@swagger.ApiTags("accesslogApplications")
@common.Controller("accesslogApplications")
export class AccesslogApplicationController extends AccesslogApplicationControllerBase {
  constructor(protected readonly service: AccesslogApplicationService) {
    super(service);
  }
}
