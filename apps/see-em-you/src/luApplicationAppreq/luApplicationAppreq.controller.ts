import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationAppreqService } from "./luApplicationAppreq.service";
import { LuApplicationAppreqControllerBase } from "./base/luApplicationAppreq.controller.base";

@swagger.ApiTags("luApplicationAppreqs")
@common.Controller("luApplicationAppreqs")
export class LuApplicationAppreqController extends LuApplicationAppreqControllerBase {
  constructor(protected readonly service: LuApplicationAppreqService) {
    super(service);
  }
}
