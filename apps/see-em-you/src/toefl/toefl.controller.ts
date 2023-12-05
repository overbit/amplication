import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToeflService } from "./toefl.service";
import { ToeflControllerBase } from "./base/toefl.controller.base";

@swagger.ApiTags("toefls")
@common.Controller("toefls")
export class ToeflController extends ToeflControllerBase {
  constructor(protected readonly service: ToeflService) {
    super(service);
  }
}
