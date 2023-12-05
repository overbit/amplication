import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaiverApplicationService } from "./waiverApplication.service";
import { WaiverApplicationControllerBase } from "./base/waiverApplication.controller.base";

@swagger.ApiTags("waiverApplications")
@common.Controller("waiverApplications")
export class WaiverApplicationController extends WaiverApplicationControllerBase {
  constructor(protected readonly service: WaiverApplicationService) {
    super(service);
  }
}
