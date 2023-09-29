import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FolderLabelInfoService } from "./folderLabelInfo.service";
import { FolderLabelInfoControllerBase } from "./base/folderLabelInfo.controller.base";

@swagger.ApiTags("folderLabelInfos")
@common.Controller("folderLabelInfos")
export class FolderLabelInfoController extends FolderLabelInfoControllerBase {
  constructor(protected readonly service: FolderLabelInfoService) {
    super(service);
  }
}
