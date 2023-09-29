import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScsUserService } from "./scsUser.service";
import { ScsUserControllerBase } from "./base/scsUser.controller.base";

@swagger.ApiTags("scsUsers")
@common.Controller("scsUsers")
export class ScsUserController extends ScsUserControllerBase {
  constructor(protected readonly service: ScsUserService) {
    super(service);
  }
}
