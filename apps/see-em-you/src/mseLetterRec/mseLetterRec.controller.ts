import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MseLetterRecService } from "./mseLetterRec.service";
import { MseLetterRecControllerBase } from "./base/mseLetterRec.controller.base";

@swagger.ApiTags("mseLetterRecs")
@common.Controller("mseLetterRecs")
export class MseLetterRecController extends MseLetterRecControllerBase {
  constructor(protected readonly service: MseLetterRecService) {
    super(service);
  }
}
