import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExceptionAppService } from "./exceptionApp.service";
import { ExceptionAppControllerBase } from "./base/exceptionApp.controller.base";

@swagger.ApiTags("exceptionApps")
@common.Controller("exceptionApps")
export class ExceptionAppController extends ExceptionAppControllerBase {
  constructor(protected readonly service: ExceptionAppService) {
    super(service);
  }
}
