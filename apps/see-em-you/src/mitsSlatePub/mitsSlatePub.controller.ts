import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MitsSlatePubService } from "./mitsSlatePub.service";
import { MitsSlatePubControllerBase } from "./base/mitsSlatePub.controller.base";

@swagger.ApiTags("mitsSlatePubs")
@common.Controller("mitsSlatePubs")
export class MitsSlatePubController extends MitsSlatePubControllerBase {
  constructor(protected readonly service: MitsSlatePubService) {
    super(service);
  }
}
