import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtsConfigService } from "./etsConfig.service";
import { EtsConfigControllerBase } from "./base/etsConfig.controller.base";

@swagger.ApiTags("etsConfigs")
@common.Controller("etsConfigs")
export class EtsConfigController extends EtsConfigControllerBase {
  constructor(protected readonly service: EtsConfigService) {
    super(service);
  }
}
