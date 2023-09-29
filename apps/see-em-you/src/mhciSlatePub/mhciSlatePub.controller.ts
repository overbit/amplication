import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciSlatePubService } from "./mhciSlatePub.service";
import { MhciSlatePubControllerBase } from "./base/mhciSlatePub.controller.base";

@swagger.ApiTags("mhciSlatePubs")
@common.Controller("mhciSlatePubs")
export class MhciSlatePubController extends MhciSlatePubControllerBase {
  constructor(protected readonly service: MhciSlatePubService) {
    super(service);
  }
}
