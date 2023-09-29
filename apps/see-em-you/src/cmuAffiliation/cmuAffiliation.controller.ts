import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CmuAffiliationService } from "./cmuAffiliation.service";
import { CmuAffiliationControllerBase } from "./base/cmuAffiliation.controller.base";

@swagger.ApiTags("cmuAffiliations")
@common.Controller("cmuAffiliations")
export class CmuAffiliationController extends CmuAffiliationControllerBase {
  constructor(protected readonly service: CmuAffiliationService) {
    super(service);
  }
}
