import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RevgroupService } from "./revgroup.service";
import { RevgroupControllerBase } from "./base/revgroup.controller.base";

@swagger.ApiTags("revgroups")
@common.Controller("revgroups")
export class RevgroupController extends RevgroupControllerBase {
  constructor(protected readonly service: RevgroupService) {
    super(service);
  }
}
