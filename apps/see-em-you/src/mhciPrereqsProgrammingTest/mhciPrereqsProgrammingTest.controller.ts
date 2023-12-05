import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";
import { MhciPrereqsProgrammingTestControllerBase } from "./base/mhciPrereqsProgrammingTest.controller.base";

@swagger.ApiTags("mhciPrereqsProgrammingTests")
@common.Controller("mhciPrereqsProgrammingTests")
export class MhciPrereqsProgrammingTestController extends MhciPrereqsProgrammingTestControllerBase {
  constructor(protected readonly service: MhciPrereqsProgrammingTestService) {
    super(service);
  }
}
