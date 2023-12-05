import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Em2FinancialSupportService } from "./em2FinancialSupport.service";
import { Em2FinancialSupportControllerBase } from "./base/em2FinancialSupport.controller.base";

@swagger.ApiTags("em2FinancialSupports")
@common.Controller("em2FinancialSupports")
export class Em2FinancialSupportController extends Em2FinancialSupportControllerBase {
  constructor(protected readonly service: Em2FinancialSupportService) {
    super(service);
  }
}
