import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SelfGenderService } from "./selfGender.service";
import { SelfGenderControllerBase } from "./base/selfGender.controller.base";

@swagger.ApiTags("selfGenders")
@common.Controller("selfGenders")
export class SelfGenderController extends SelfGenderControllerBase {
  constructor(protected readonly service: SelfGenderService) {
    super(service);
  }
}
