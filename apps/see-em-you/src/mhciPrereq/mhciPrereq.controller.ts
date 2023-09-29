import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqService } from "./mhciPrereq.service";
import { MhciPrereqControllerBase } from "./base/mhciPrereq.controller.base";

@swagger.ApiTags("mhciPrereqs")
@common.Controller("mhciPrereqs")
export class MhciPrereqController extends MhciPrereqControllerBase {
  constructor(protected readonly service: MhciPrereqService) {
    super(service);
  }
}
