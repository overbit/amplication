import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DegreeLevelService } from "./degreeLevel.service";
import { DegreeLevelControllerBase } from "./base/degreeLevel.controller.base";

@swagger.ApiTags("degreeLevels")
@common.Controller("degreeLevels")
export class DegreeLevelController extends DegreeLevelControllerBase {
  constructor(protected readonly service: DegreeLevelService) {
    super(service);
  }
}
