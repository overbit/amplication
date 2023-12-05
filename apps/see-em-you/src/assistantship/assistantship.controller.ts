import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssistantshipService } from "./assistantship.service";
import { AssistantshipControllerBase } from "./base/assistantship.controller.base";

@swagger.ApiTags("assistantships")
@common.Controller("assistantships")
export class AssistantshipController extends AssistantshipControllerBase {
  constructor(protected readonly service: AssistantshipService) {
    super(service);
  }
}
