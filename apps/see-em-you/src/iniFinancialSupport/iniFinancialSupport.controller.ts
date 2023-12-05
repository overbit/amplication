import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";
import { IniFinancialSupportControllerBase } from "./base/iniFinancialSupport.controller.base";

@swagger.ApiTags("iniFinancialSupports")
@common.Controller("iniFinancialSupports")
export class IniFinancialSupportController extends IniFinancialSupportControllerBase {
  constructor(protected readonly service: IniFinancialSupportService) {
    super(service);
  }
}
