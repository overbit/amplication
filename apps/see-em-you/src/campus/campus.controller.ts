import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampusService } from "./campus.service";
import { CampusControllerBase } from "./base/campus.controller.base";

@swagger.ApiTags("campuses")
@common.Controller("campuses")
export class CampusController extends CampusControllerBase {
  constructor(protected readonly service: CampusService) {
    super(service);
  }
}
