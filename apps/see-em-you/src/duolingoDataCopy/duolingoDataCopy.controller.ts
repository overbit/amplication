import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";
import { DuolingoDataCopyControllerBase } from "./base/duolingoDataCopy.controller.base";

@swagger.ApiTags("duolingoDataCopies")
@common.Controller("duolingoDataCopies")
export class DuolingoDataCopyController extends DuolingoDataCopyControllerBase {
  constructor(protected readonly service: DuolingoDataCopyService) {
    super(service);
  }
}
