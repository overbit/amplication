import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DuolingoDatumService } from "./duolingoDatum.service";
import { DuolingoDatumControllerBase } from "./base/duolingoDatum.controller.base";

@swagger.ApiTags("duolingoData")
@common.Controller("duolingoData")
export class DuolingoDatumController extends DuolingoDatumControllerBase {
  constructor(protected readonly service: DuolingoDatumService) {
    super(service);
  }
}
