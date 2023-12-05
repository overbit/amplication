import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentService } from "./content.service";
import { ContentControllerBase } from "./base/content.controller.base";

@swagger.ApiTags("contents")
@common.Controller("contents")
export class ContentController extends ContentControllerBase {
  constructor(protected readonly service: ContentService) {
    super(service);
  }
}
