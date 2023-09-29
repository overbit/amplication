import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TesttableforBansheeService } from "./testtableforBanshee.service";
import { TesttableforBansheeControllerBase } from "./base/testtableforBanshee.controller.base";

@swagger.ApiTags("testtableforBanshees")
@common.Controller("testtableforBanshees")
export class TesttableforBansheeController extends TesttableforBansheeControllerBase {
  constructor(protected readonly service: TesttableforBansheeService) {
    super(service);
  }
}
