import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RissFundingService } from "./rissFunding.service";
import { RissFundingControllerBase } from "./base/rissFunding.controller.base";

@swagger.ApiTags("rissFundings")
@common.Controller("rissFundings")
export class RissFundingController extends RissFundingControllerBase {
  constructor(protected readonly service: RissFundingService) {
    super(service);
  }
}
