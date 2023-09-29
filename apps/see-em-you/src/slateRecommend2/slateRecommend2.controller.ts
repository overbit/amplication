import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateRecommend2Service } from "./slateRecommend2.service";
import { SlateRecommend2ControllerBase } from "./base/slateRecommend2.controller.base";

@swagger.ApiTags("slateRecommend2s")
@common.Controller("slateRecommend2s")
export class SlateRecommend2Controller extends SlateRecommend2ControllerBase {
  constructor(protected readonly service: SlateRecommend2Service) {
    super(service);
  }
}
