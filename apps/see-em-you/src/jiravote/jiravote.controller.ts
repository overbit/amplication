import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JiravoteService } from "./jiravote.service";
import { JiravoteControllerBase } from "./base/jiravote.controller.base";

@swagger.ApiTags("jiravotes")
@common.Controller("jiravotes")
export class JiravoteController extends JiravoteControllerBase {
  constructor(protected readonly service: JiravoteService) {
    super(service);
  }
}
