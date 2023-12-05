import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestusersInfoService } from "./testusersInfo.service";
import { TestusersInfoControllerBase } from "./base/testusersInfo.controller.base";

@swagger.ApiTags("testusersInfos")
@common.Controller("testusersInfos")
export class TestusersInfoController extends TestusersInfoControllerBase {
  constructor(protected readonly service: TestusersInfoService) {
    super(service);
  }
}
