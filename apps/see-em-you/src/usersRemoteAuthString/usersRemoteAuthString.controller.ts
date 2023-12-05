import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";
import { UsersRemoteAuthStringControllerBase } from "./base/usersRemoteAuthString.controller.base";

@swagger.ApiTags("usersRemoteAuthStrings")
@common.Controller("usersRemoteAuthStrings")
export class UsersRemoteAuthStringController extends UsersRemoteAuthStringControllerBase {
  constructor(protected readonly service: UsersRemoteAuthStringService) {
    super(service);
  }
}
