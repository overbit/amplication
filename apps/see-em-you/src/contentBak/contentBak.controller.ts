import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentBakService } from "./contentBak.service";
import { ContentBakControllerBase } from "./base/contentBak.controller.base";

@swagger.ApiTags("contentBaks")
@common.Controller("contentBaks")
export class ContentBakController extends ContentBakControllerBase {
  constructor(protected readonly service: ContentBakService) {
    super(service);
  }
}
