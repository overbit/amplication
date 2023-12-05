import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";
import { DietrichFinancialSupportControllerBase } from "./base/dietrichFinancialSupport.controller.base";

@swagger.ApiTags("dietrichFinancialSupports")
@common.Controller("dietrichFinancialSupports")
export class DietrichFinancialSupportController extends DietrichFinancialSupportControllerBase {
  constructor(protected readonly service: DietrichFinancialSupportService) {
    super(service);
  }
}
