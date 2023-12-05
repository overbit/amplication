import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsHsStatusService } from "./usHsStatus.service";
import { UsHsStatusControllerBase } from "./base/usHsStatus.controller.base";

@swagger.ApiTags("usHsStatuses")
@common.Controller("usHsStatuses")
export class UsHsStatusController extends UsHsStatusControllerBase {
  constructor(protected readonly service: UsHsStatusService) {
    super(service);
  }
}
