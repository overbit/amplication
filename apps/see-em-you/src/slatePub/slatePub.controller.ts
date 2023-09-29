import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlatePubService } from "./slatePub.service";
import { SlatePubControllerBase } from "./base/slatePub.controller.base";

@swagger.ApiTags("slatePubs")
@common.Controller("slatePubs")
export class SlatePubController extends SlatePubControllerBase {
  constructor(protected readonly service: SlatePubService) {
    super(service);
  }
}
