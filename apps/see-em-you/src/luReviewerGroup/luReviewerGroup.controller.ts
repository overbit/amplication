import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuReviewerGroupService } from "./luReviewerGroup.service";
import { LuReviewerGroupControllerBase } from "./base/luReviewerGroup.controller.base";

@swagger.ApiTags("luReviewerGroups")
@common.Controller("luReviewerGroups")
export class LuReviewerGroupController extends LuReviewerGroupControllerBase {
  constructor(protected readonly service: LuReviewerGroupService) {
    super(service);
  }
}
