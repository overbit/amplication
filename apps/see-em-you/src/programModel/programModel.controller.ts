import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramModelService } from "./programModel.service";
import { ProgramModelControllerBase } from "./base/programModel.controller.base";

@swagger.ApiTags("programModels")
@common.Controller("programModels")
export class ProgramModelController extends ProgramModelControllerBase {
  constructor(protected readonly service: ProgramModelService) {
    super(service);
  }
}
