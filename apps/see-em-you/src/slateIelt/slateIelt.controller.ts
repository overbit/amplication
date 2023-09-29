import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateIeltService } from "./slateIelt.service";
import { SlateIeltControllerBase } from "./base/slateIelt.controller.base";

@swagger.ApiTags("slateIelts")
@common.Controller("slateIelts")
export class SlateIeltController extends SlateIeltControllerBase {
  constructor(protected readonly service: SlateIeltService) {
    super(service);
  }
}
