import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DietrichRecognitionService } from "./dietrichRecognition.service";
import { DietrichRecognitionControllerBase } from "./base/dietrichRecognition.controller.base";

@swagger.ApiTags("dietrichRecognitions")
@common.Controller("dietrichRecognitions")
export class DietrichRecognitionController extends DietrichRecognitionControllerBase {
  constructor(protected readonly service: DietrichRecognitionService) {
    super(service);
  }
}
