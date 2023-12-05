import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationreqService } from "./applicationreq.service";
import { ApplicationreqControllerBase } from "./base/applicationreq.controller.base";

@swagger.ApiTags("applicationreqs")
@common.Controller("applicationreqs")
export class ApplicationreqController extends ApplicationreqControllerBase {
  constructor(protected readonly service: ApplicationreqService) {
    super(service);
  }
}
