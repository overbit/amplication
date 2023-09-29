import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateLangCodeService } from "./slateLangCode.service";
import { SlateLangCodeControllerBase } from "./base/slateLangCode.controller.base";

@swagger.ApiTags("slateLangCodes")
@common.Controller("slateLangCodes")
export class SlateLangCodeController extends SlateLangCodeControllerBase {
  constructor(protected readonly service: SlateLangCodeService) {
    super(service);
  }
}
