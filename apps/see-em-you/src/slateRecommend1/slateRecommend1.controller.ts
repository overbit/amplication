import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateRecommend1Service } from "./slateRecommend1.service";
import { SlateRecommend1ControllerBase } from "./base/slateRecommend1.controller.base";

@swagger.ApiTags("slateRecommend1s")
@common.Controller("slateRecommend1s")
export class SlateRecommend1Controller extends SlateRecommend1ControllerBase {
  constructor(protected readonly service: SlateRecommend1Service) {
    super(service);
  }
}
