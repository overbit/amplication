import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";
import { DepartmentEnableRecyclingControllerBase } from "./base/departmentEnableRecycling.controller.base";

@swagger.ApiTags("departmentEnableRecyclings")
@common.Controller("departmentEnableRecyclings")
export class DepartmentEnableRecyclingController extends DepartmentEnableRecyclingControllerBase {
  constructor(protected readonly service: DepartmentEnableRecyclingService) {
    super(service);
  }
}
