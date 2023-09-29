import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtsGreService } from "./etsGre.service";
import { EtsGreControllerBase } from "./base/etsGre.controller.base";

@swagger.ApiTags("etsGres")
@common.Controller("etsGres")
export class EtsGreController extends EtsGreControllerBase {
  constructor(protected readonly service: EtsGreService) {
    super(service);
  }
}
