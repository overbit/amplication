import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DomainService } from "./domain.service";
import { DomainControllerBase } from "./base/domain.controller.base";

@swagger.ApiTags("domains")
@common.Controller("domains")
export class DomainController extends DomainControllerBase {
  constructor(protected readonly service: DomainService) {
    super(service);
  }
}
