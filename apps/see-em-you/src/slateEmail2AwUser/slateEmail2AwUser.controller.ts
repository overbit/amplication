import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlateEmail2AwUserService } from "./slateEmail2AwUser.service";
import { SlateEmail2AwUserControllerBase } from "./base/slateEmail2AwUser.controller.base";

@swagger.ApiTags("slateEmail2AwUsers")
@common.Controller("slateEmail2AwUsers")
export class SlateEmail2AwUserController extends SlateEmail2AwUserControllerBase {
  constructor(protected readonly service: SlateEmail2AwUserService) {
    super(service);
  }
}
