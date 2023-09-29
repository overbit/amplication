import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LuApplicationCohortService } from "./luApplicationCohort.service";
import { LuApplicationCohortControllerBase } from "./base/luApplicationCohort.controller.base";

@swagger.ApiTags("luApplicationCohorts")
@common.Controller("luApplicationCohorts")
export class LuApplicationCohortController extends LuApplicationCohortControllerBase {
  constructor(protected readonly service: LuApplicationCohortService) {
    super(service);
  }
}
