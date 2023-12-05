import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateAppService } from "./slateApp.service";
import { SlateAppControllerBase } from "./base/slateApp.controller.base";

@swagger.ApiTags("slateApps")
@common.Controller("slateApps")
export class SlateAppController extends SlateAppControllerBase {
  constructor(protected readonly service: SlateAppService) {
    super(service);
  }
}
