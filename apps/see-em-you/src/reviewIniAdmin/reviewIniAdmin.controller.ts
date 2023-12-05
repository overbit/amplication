import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";
import { ReviewIniAdminControllerBase } from "./base/reviewIniAdmin.controller.base";

@swagger.ApiTags("reviewIniAdmins")
@common.Controller("reviewIniAdmins")
export class ReviewIniAdminController extends ReviewIniAdminControllerBase {
  constructor(protected readonly service: ReviewIniAdminService) {
    super(service);
  }
}
