import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsReviewerService } from "./mhciPrereqsReviewer.service";
import { MhciPrereqsReviewerControllerBase } from "./base/mhciPrereqsReviewer.controller.base";

@swagger.ApiTags("mhciPrereqsReviewers")
@common.Controller("mhciPrereqsReviewers")
export class MhciPrereqsReviewerController extends MhciPrereqsReviewerControllerBase {
  constructor(protected readonly service: MhciPrereqsReviewerService) {
    super(service);
  }
}
