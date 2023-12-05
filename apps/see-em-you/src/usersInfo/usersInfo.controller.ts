import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersInfoService } from "./usersInfo.service";
import { UsersInfoControllerBase } from "./base/usersInfo.controller.base";

@swagger.ApiTags("usersInfos")
@common.Controller("usersInfos")
export class UsersInfoController extends UsersInfoControllerBase {
  constructor(protected readonly service: UsersInfoService) {
    super(service);
  }
}
