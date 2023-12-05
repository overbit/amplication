import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScsUserWebisoService } from "./scsUserWebiso.service";
import { ScsUserWebisoControllerBase } from "./base/scsUserWebiso.controller.base";

@swagger.ApiTags("scsUserWebisos")
@common.Controller("scsUserWebisos")
export class ScsUserWebisoController extends ScsUserWebisoControllerBase {
  constructor(protected readonly service: ScsUserWebisoService) {
    super(service);
  }
}
