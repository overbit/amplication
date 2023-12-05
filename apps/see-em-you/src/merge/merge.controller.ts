import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MergeService } from "./merge.service";
import { MergeControllerBase } from "./base/merge.controller.base";

@swagger.ApiTags("merges")
@common.Controller("merges")
export class MergeController extends MergeControllerBase {
  constructor(protected readonly service: MergeService) {
    super(service);
  }
}
