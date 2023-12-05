import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HighschoolService } from "./highschool.service";
import { HighschoolControllerBase } from "./base/highschool.controller.base";

@swagger.ApiTags("highschools")
@common.Controller("highschools")
export class HighschoolController extends HighschoolControllerBase {
  constructor(protected readonly service: HighschoolService) {
    super(service);
  }
}
