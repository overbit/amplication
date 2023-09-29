import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParentInfoService } from "./parentInfo.service";
import { ParentInfoControllerBase } from "./base/parentInfo.controller.base";

@swagger.ApiTags("parentInfos")
@common.Controller("parentInfos")
export class ParentInfoController extends ParentInfoControllerBase {
  constructor(protected readonly service: ParentInfoService) {
    super(service);
  }
}
