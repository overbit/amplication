import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciPrereqsReferenceService } from "./mhciPrereqsReference.service";
import { MhciPrereqsReferenceControllerBase } from "./base/mhciPrereqsReference.controller.base";

@swagger.ApiTags("mhciPrereqsReferences")
@common.Controller("mhciPrereqsReferences")
export class MhciPrereqsReferenceController extends MhciPrereqsReferenceControllerBase {
  constructor(protected readonly service: MhciPrereqsReferenceService) {
    super(service);
  }
}
