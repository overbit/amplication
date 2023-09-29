import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciSlateGreService } from "./mhciSlateGre.service";
import { MhciSlateGreControllerBase } from "./base/mhciSlateGre.controller.base";

@swagger.ApiTags("mhciSlateGres")
@common.Controller("mhciSlateGres")
export class MhciSlateGreController extends MhciSlateGreControllerBase {
  constructor(protected readonly service: MhciSlateGreService) {
    super(service);
  }
}
