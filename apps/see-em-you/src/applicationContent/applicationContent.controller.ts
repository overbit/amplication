import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationContentService } from "./applicationContent.service";
import { ApplicationContentControllerBase } from "./base/applicationContent.controller.base";

@swagger.ApiTags("applicationContents")
@common.Controller("applicationContents")
export class ApplicationContentController extends ApplicationContentControllerBase {
  constructor(protected readonly service: ApplicationContentService) {
    super(service);
  }
}
