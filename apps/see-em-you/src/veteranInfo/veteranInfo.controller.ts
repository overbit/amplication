import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VeteranInfoService } from "./veteranInfo.service";
import { VeteranInfoControllerBase } from "./base/veteranInfo.controller.base";

@swagger.ApiTags("veteranInfos")
@common.Controller("veteranInfos")
export class VeteranInfoController extends VeteranInfoControllerBase {
  constructor(protected readonly service: VeteranInfoService) {
    super(service);
  }
}
