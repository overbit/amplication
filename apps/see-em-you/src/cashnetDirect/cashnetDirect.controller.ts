import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CashnetDirectService } from "./cashnetDirect.service";
import { CashnetDirectControllerBase } from "./base/cashnetDirect.controller.base";

@swagger.ApiTags("cashnetDirects")
@common.Controller("cashnetDirects")
export class CashnetDirectController extends CashnetDirectControllerBase {
  constructor(protected readonly service: CashnetDirectService) {
    super(service);
  }
}
