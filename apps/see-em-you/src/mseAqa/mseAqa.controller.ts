import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseAqaService } from "./mseAqa.service";
import { MseAqaControllerBase } from "./base/mseAqa.controller.base";

@swagger.ApiTags("mseAqas")
@common.Controller("mseAqas")
export class MseAqaController extends MseAqaControllerBase {
  constructor(protected readonly service: MseAqaService) {
    super(service);
  }
}
