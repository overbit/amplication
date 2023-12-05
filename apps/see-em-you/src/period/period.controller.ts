import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeriodService } from "./period.service";
import { PeriodControllerBase } from "./base/period.controller.base";

@swagger.ApiTags("periods")
@common.Controller("periods")
export class PeriodController extends PeriodControllerBase {
  constructor(protected readonly service: PeriodService) {
    super(service);
  }
}
