import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";
import { ApplicationMergeFileControllerBase } from "./base/applicationMergeFile.controller.base";

@swagger.ApiTags("applicationMergeFiles")
@common.Controller("applicationMergeFiles")
export class ApplicationMergeFileController extends ApplicationMergeFileControllerBase {
  constructor(protected readonly service: ApplicationMergeFileService) {
    super(service);
  }
}
