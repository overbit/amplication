import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersOrigService } from "./usersOrig.service";
import { UsersOrigControllerBase } from "./base/usersOrig.controller.base";

@swagger.ApiTags("usersOrigs")
@common.Controller("usersOrigs")
export class UsersOrigController extends UsersOrigControllerBase {
  constructor(protected readonly service: UsersOrigService) {
    super(service);
  }
}
