import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsProgrammingSampleService } from "./mhciPrereqsProgrammingSample.service";
import { MhciPrereqsProgrammingSampleControllerBase } from "./base/mhciPrereqsProgrammingSample.controller.base";

@swagger.ApiTags("mhciPrereqsProgrammingSamples")
@common.Controller("mhciPrereqsProgrammingSamples")
export class MhciPrereqsProgrammingSampleController extends MhciPrereqsProgrammingSampleControllerBase {
  constructor(protected readonly service: MhciPrereqsProgrammingSampleService) {
    super(service);
  }
}
