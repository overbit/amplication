import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StateService } from "./state.service";
import { StateControllerBase } from "./base/state.controller.base";

@swagger.ApiTags("states")
@common.Controller("states")
export class StateController extends StateControllerBase {
  constructor(protected readonly service: StateService) {
    super(service);
  }
}
