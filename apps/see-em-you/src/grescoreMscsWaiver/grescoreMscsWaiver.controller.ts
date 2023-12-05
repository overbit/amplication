import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GrescoreMscsWaiverService } from "./grescoreMscsWaiver.service";
import { GrescoreMscsWaiverControllerBase } from "./base/grescoreMscsWaiver.controller.base";

@swagger.ApiTags("grescoreMscsWaivers")
@common.Controller("grescoreMscsWaivers")
export class GrescoreMscsWaiverController extends GrescoreMscsWaiverControllerBase {
  constructor(protected readonly service: GrescoreMscsWaiverService) {
    super(service);
  }
}
