import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InterestService } from "./interest.service";
import { InterestControllerBase } from "./base/interest.controller.base";

@swagger.ApiTags("interests")
@common.Controller("interests")
export class InterestController extends InterestControllerBase {
  constructor(protected readonly service: InterestService) {
    super(service);
  }
}
