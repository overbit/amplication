import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FailedMergeService } from "./failedMerge.service";
import { FailedMergeControllerBase } from "./base/failedMerge.controller.base";

@swagger.ApiTags("failedMerges")
@common.Controller("failedMerges")
export class FailedMergeController extends FailedMergeControllerBase {
  constructor(protected readonly service: FailedMergeService) {
    super(service);
  }
}
