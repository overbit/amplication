import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FieldsofstudyService } from "./fieldsofstudy.service";
import { FieldsofstudyControllerBase } from "./base/fieldsofstudy.controller.base";

@swagger.ApiTags("fieldsofstudies")
@common.Controller("fieldsofstudies")
export class FieldsofstudyController extends FieldsofstudyControllerBase {
  constructor(protected readonly service: FieldsofstudyService) {
    super(service);
  }
}
