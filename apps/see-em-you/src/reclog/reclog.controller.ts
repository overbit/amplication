import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReclogService } from "./reclog.service";
import { ReclogControllerBase } from "./base/reclog.controller.base";

@swagger.ApiTags("reclogs")
@common.Controller("reclogs")
export class ReclogController extends ReclogControllerBase {
  constructor(protected readonly service: ReclogService) {
    super(service);
  }
}
