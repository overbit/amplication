import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsertypeService } from "./usertype.service";
import { UsertypeControllerBase } from "./base/usertype.controller.base";

@swagger.ApiTags("usertypes")
@common.Controller("usertypes")
export class UsertypeController extends UsertypeControllerBase {
  constructor(protected readonly service: UsertypeService) {
    super(service);
  }
}
