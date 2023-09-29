import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatafileinfoService } from "./datafileinfo.service";
import { DatafileinfoControllerBase } from "./base/datafileinfo.controller.base";

@swagger.ApiTags("datafileinfos")
@common.Controller("datafileinfos")
export class DatafileinfoController extends DatafileinfoControllerBase {
  constructor(protected readonly service: DatafileinfoService) {
    super(service);
  }
}
