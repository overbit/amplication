import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatafileTypeService } from "./datafileType.service";
import { DatafileTypeControllerBase } from "./base/datafileType.controller.base";

@swagger.ApiTags("datafileTypes")
@common.Controller("datafileTypes")
export class DatafileTypeController extends DatafileTypeControllerBase {
  constructor(protected readonly service: DatafileTypeService) {
    super(service);
  }
}
