import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";
import { LuApplicationAdvisorControllerBase } from "./base/luApplicationAdvisor.controller.base";

@swagger.ApiTags("luApplicationAdvisors")
@common.Controller("luApplicationAdvisors")
export class LuApplicationAdvisorController extends LuApplicationAdvisorControllerBase {
  constructor(protected readonly service: LuApplicationAdvisorService) {
    super(service);
  }
}
