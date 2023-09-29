import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsStatusService } from "./mhciPrereqsStatus.service";
import { MhciPrereqsStatusControllerBase } from "./base/mhciPrereqsStatus.controller.base";

@swagger.ApiTags("mhciPrereqsStatuses")
@common.Controller("mhciPrereqsStatuses")
export class MhciPrereqsStatusController extends MhciPrereqsStatusControllerBase {
  constructor(protected readonly service: MhciPrereqsStatusService) {
    super(service);
  }
}
