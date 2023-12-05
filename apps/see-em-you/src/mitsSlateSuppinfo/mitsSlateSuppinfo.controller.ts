import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlateSuppinfoService } from "./mitsSlateSuppinfo.service";
import { MitsSlateSuppinfoControllerBase } from "./base/mitsSlateSuppinfo.controller.base";

@swagger.ApiTags("mitsSlateSuppinfos")
@common.Controller("mitsSlateSuppinfos")
export class MitsSlateSuppinfoController extends MitsSlateSuppinfoControllerBase {
  constructor(protected readonly service: MitsSlateSuppinfoService) {
    super(service);
  }
}
