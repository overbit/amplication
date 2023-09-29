import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GresubjectscoreService } from "./gresubjectscore.service";
import { GresubjectscoreControllerBase } from "./base/gresubjectscore.controller.base";

@swagger.ApiTags("gresubjectscores")
@common.Controller("gresubjectscores")
export class GresubjectscoreController extends GresubjectscoreControllerBase {
  constructor(protected readonly service: GresubjectscoreService) {
    super(service);
  }
}
