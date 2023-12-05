import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaiverOrgService } from "./waiverOrg.service";
import { WaiverOrgControllerBase } from "./base/waiverOrg.controller.base";

@swagger.ApiTags("waiverOrgs")
@common.Controller("waiverOrgs")
export class WaiverOrgController extends WaiverOrgControllerBase {
  constructor(protected readonly service: WaiverOrgService) {
    super(service);
  }
}
