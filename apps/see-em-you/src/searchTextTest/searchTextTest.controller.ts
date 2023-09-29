import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchTextTestService } from "./searchTextTest.service";
import { SearchTextTestControllerBase } from "./base/searchTextTest.controller.base";

@swagger.ApiTags("searchTextTests")
@common.Controller("searchTextTests")
export class SearchTextTestController extends SearchTextTestControllerBase {
  constructor(protected readonly service: SearchTextTestService) {
    super(service);
  }
}
