import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateEmployService } from "./slateEmploy.service";
import { SlateEmployControllerBase } from "./base/slateEmploy.controller.base";

@swagger.ApiTags("slateEmploys")
@common.Controller("slateEmploys")
export class SlateEmployController extends SlateEmployControllerBase {
  constructor(protected readonly service: SlateEmployService) {
    super(service);
  }
}
