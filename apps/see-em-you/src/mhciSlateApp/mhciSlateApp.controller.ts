import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciSlateAppService } from "./mhciSlateApp.service";
import { MhciSlateAppControllerBase } from "./base/mhciSlateApp.controller.base";

@swagger.ApiTags("mhciSlateApps")
@common.Controller("mhciSlateApps")
export class MhciSlateAppController extends MhciSlateAppControllerBase {
  constructor(protected readonly service: MhciSlateAppService) {
    super(service);
  }
}
