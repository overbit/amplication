import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateOrgService } from "./slateOrg.service";
import { SlateOrgControllerBase } from "./base/slateOrg.controller.base";

@swagger.ApiTags("slateOrgs")
@common.Controller("slateOrgs")
export class SlateOrgController extends SlateOrgControllerBase {
  constructor(protected readonly service: SlateOrgService) {
    super(service);
  }
}
