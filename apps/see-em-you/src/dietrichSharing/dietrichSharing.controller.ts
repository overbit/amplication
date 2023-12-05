import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DietrichSharingService } from "./dietrichSharing.service";
import { DietrichSharingControllerBase } from "./base/dietrichSharing.controller.base";

@swagger.ApiTags("dietrichSharings")
@common.Controller("dietrichSharings")
export class DietrichSharingController extends DietrichSharingControllerBase {
  constructor(protected readonly service: DietrichSharingService) {
    super(service);
  }
}
