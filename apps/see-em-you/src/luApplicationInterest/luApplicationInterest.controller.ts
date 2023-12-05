import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationInterestService } from "./luApplicationInterest.service";
import { LuApplicationInterestControllerBase } from "./base/luApplicationInterest.controller.base";

@swagger.ApiTags("luApplicationInterests")
@common.Controller("luApplicationInterests")
export class LuApplicationInterestController extends LuApplicationInterestControllerBase {
  constructor(protected readonly service: LuApplicationInterestService) {
    super(service);
  }
}
