import { Module } from "@nestjs/common";
import { IniYearsExperienceModuleBase } from "./base/iniYearsExperience.module.base";
import { IniYearsExperienceService } from "./iniYearsExperience.service";
import { IniYearsExperienceController } from "./iniYearsExperience.controller";
import { IniYearsExperienceResolver } from "./iniYearsExperience.resolver";

@Module({
  imports: [IniYearsExperienceModuleBase],
  controllers: [IniYearsExperienceController],
  providers: [IniYearsExperienceService, IniYearsExperienceResolver],
  exports: [IniYearsExperienceService],
})
export class IniYearsExperienceModule {}
