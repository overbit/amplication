import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateSuppinfoService } from "./slateSuppinfo.service";
import { SlateSuppinfoControllerBase } from "./base/slateSuppinfo.controller.base";

@swagger.ApiTags("slateSuppinfos")
@common.Controller("slateSuppinfos")
export class SlateSuppinfoController extends SlateSuppinfoControllerBase {
  constructor(protected readonly service: SlateSuppinfoService) {
    super(service);
  }
}
