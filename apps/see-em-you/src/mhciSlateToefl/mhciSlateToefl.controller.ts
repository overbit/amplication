import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MhciSlateToeflService } from "./mhciSlateToefl.service";
import { MhciSlateToeflControllerBase } from "./base/mhciSlateToefl.controller.base";

@swagger.ApiTags("mhciSlateToefls")
@common.Controller("mhciSlateToefls")
export class MhciSlateToeflController extends MhciSlateToeflControllerBase {
  constructor(protected readonly service: MhciSlateToeflService) {
    super(service);
  }
}
