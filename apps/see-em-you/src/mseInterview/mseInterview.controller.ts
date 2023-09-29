import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseInterviewService } from "./mseInterview.service";
import { MseInterviewControllerBase } from "./base/mseInterview.controller.base";

@swagger.ApiTags("mseInterviews")
@common.Controller("mseInterviews")
export class MseInterviewController extends MseInterviewControllerBase {
  constructor(protected readonly service: MseInterviewService) {
    super(service);
  }
}
