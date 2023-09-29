import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Em2SopService } from "./em2Sop.service";
import { Em2SopControllerBase } from "./base/em2Sop.controller.base";

@swagger.ApiTags("em2Sops")
@common.Controller("em2Sops")
export class Em2SopController extends Em2SopControllerBase {
  constructor(protected readonly service: Em2SopService) {
    super(service);
  }
}
