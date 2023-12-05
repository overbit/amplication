import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IniYearsExperienceService } from "./iniYearsExperience.service";
import { IniYearsExperienceControllerBase } from "./base/iniYearsExperience.controller.base";

@swagger.ApiTags("iniYearsExperiences")
@common.Controller("iniYearsExperiences")
export class IniYearsExperienceController extends IniYearsExperienceControllerBase {
  constructor(protected readonly service: IniYearsExperienceService) {
    super(service);
  }
}
