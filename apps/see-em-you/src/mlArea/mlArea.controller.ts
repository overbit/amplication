import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MlAreaService } from "./mlArea.service";
import { MlAreaControllerBase } from "./base/mlArea.controller.base";

@swagger.ApiTags("mlAreas")
@common.Controller("mlAreas")
export class MlAreaController extends MlAreaControllerBase {
  constructor(protected readonly service: MlAreaService) {
    super(service);
  }
}
