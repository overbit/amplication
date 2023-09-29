import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MergeDatafileService } from "./mergeDatafile.service";
import { MergeDatafileControllerBase } from "./base/mergeDatafile.controller.base";

@swagger.ApiTags("mergeDatafiles")
@common.Controller("mergeDatafiles")
export class MergeDatafileController extends MergeDatafileControllerBase {
  constructor(protected readonly service: MergeDatafileService) {
    super(service);
  }
}
