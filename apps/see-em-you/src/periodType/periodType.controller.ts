import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeriodTypeService } from "./periodType.service";
import { PeriodTypeControllerBase } from "./base/periodType.controller.base";

@swagger.ApiTags("periodTypes")
@common.Controller("periodTypes")
export class PeriodTypeController extends PeriodTypeControllerBase {
  constructor(protected readonly service: PeriodTypeService) {
    super(service);
  }
}
