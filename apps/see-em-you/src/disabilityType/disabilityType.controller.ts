import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DisabilityTypeService } from "./disabilityType.service";
import { DisabilityTypeControllerBase } from "./base/disabilityType.controller.base";

@swagger.ApiTags("disabilityTypes")
@common.Controller("disabilityTypes")
export class DisabilityTypeController extends DisabilityTypeControllerBase {
  constructor(protected readonly service: DisabilityTypeService) {
    super(service);
  }
}
