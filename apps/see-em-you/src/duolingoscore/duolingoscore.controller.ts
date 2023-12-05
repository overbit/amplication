import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DuolingoscoreService } from "./duolingoscore.service";
import { DuolingoscoreControllerBase } from "./base/duolingoscore.controller.base";

@swagger.ApiTags("duolingoscores")
@common.Controller("duolingoscores")
export class DuolingoscoreController extends DuolingoscoreControllerBase {
  constructor(protected readonly service: DuolingoscoreService) {
    super(service);
  }
}
