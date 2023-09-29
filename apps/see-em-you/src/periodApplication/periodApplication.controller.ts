import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeriodApplicationService } from "./periodApplication.service";
import { PeriodApplicationControllerBase } from "./base/periodApplication.controller.base";

@swagger.ApiTags("periodApplications")
@common.Controller("periodApplications")
export class PeriodApplicationController extends PeriodApplicationControllerBase {
  constructor(protected readonly service: PeriodApplicationService) {
    super(service);
  }
}
