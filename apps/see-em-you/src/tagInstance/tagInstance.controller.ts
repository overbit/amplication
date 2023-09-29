import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagInstanceService } from "./tagInstance.service";
import { TagInstanceControllerBase } from "./base/tagInstance.controller.base";

@swagger.ApiTags("tagInstances")
@common.Controller("tagInstances")
export class TagInstanceController extends TagInstanceControllerBase {
  constructor(protected readonly service: TagInstanceService) {
    super(service);
  }
}
