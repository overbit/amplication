import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";
import { ApplicationProgramLetterControllerBase } from "./base/applicationProgramLetter.controller.base";

@swagger.ApiTags("applicationProgramLetters")
@common.Controller("applicationProgramLetters")
export class ApplicationProgramLetterController extends ApplicationProgramLetterControllerBase {
  constructor(protected readonly service: ApplicationProgramLetterService) {
    super(service);
  }
}
