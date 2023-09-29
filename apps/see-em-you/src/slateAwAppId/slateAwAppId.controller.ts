import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateAwAppIdService } from "./slateAwAppId.service";
import { SlateAwAppIdControllerBase } from "./base/slateAwAppId.controller.base";

@swagger.ApiTags("slateAwAppIds")
@common.Controller("slateAwAppIds")
export class SlateAwAppIdController extends SlateAwAppIdControllerBase {
  constructor(protected readonly service: SlateAwAppIdService) {
    super(service);
  }
}
