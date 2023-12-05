import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtsGreCopyService } from "./etsGreCopy.service";
import { EtsGreCopyControllerBase } from "./base/etsGreCopy.controller.base";

@swagger.ApiTags("etsGreCopies")
@common.Controller("etsGreCopies")
export class EtsGreCopyController extends EtsGreCopyControllerBase {
  constructor(protected readonly service: EtsGreCopyService) {
    super(service);
  }
}
