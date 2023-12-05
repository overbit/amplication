import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentUnitService } from "./departmentUnit.service";
import { DepartmentUnitControllerBase } from "./base/departmentUnit.controller.base";

@swagger.ApiTags("departmentUnits")
@common.Controller("departmentUnits")
export class DepartmentUnitController extends DepartmentUnitControllerBase {
  constructor(protected readonly service: DepartmentUnitService) {
    super(service);
  }
}
