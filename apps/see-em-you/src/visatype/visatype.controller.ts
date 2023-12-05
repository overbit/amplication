import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VisatypeService } from "./visatype.service";
import { VisatypeControllerBase } from "./base/visatype.controller.base";

@swagger.ApiTags("visatypes")
@common.Controller("visatypes")
export class VisatypeController extends VisatypeControllerBase {
  constructor(protected readonly service: VisatypeService) {
    super(service);
  }
}
