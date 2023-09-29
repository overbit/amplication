import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewIniService } from "./reviewIni.service";
import { ReviewIniControllerBase } from "./base/reviewIni.controller.base";

@swagger.ApiTags("reviewInis")
@common.Controller("reviewInis")
export class ReviewIniController extends ReviewIniControllerBase {
  constructor(protected readonly service: ReviewIniService) {
    super(service);
  }
}
