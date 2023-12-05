import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecyclableSelectionService } from "./recyclableSelection.service";
import { RecyclableSelectionControllerBase } from "./base/recyclableSelection.controller.base";

@swagger.ApiTags("recyclableSelections")
@common.Controller("recyclableSelections")
export class RecyclableSelectionController extends RecyclableSelectionControllerBase {
  constructor(protected readonly service: RecyclableSelectionService) {
    super(service);
  }
}
