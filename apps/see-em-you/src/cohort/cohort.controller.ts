import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CohortService } from "./cohort.service";
import { CohortControllerBase } from "./base/cohort.controller.base";

@swagger.ApiTags("cohorts")
@common.Controller("cohorts")
export class CohortController extends CohortControllerBase {
  constructor(protected readonly service: CohortService) {
    super(service);
  }
}
