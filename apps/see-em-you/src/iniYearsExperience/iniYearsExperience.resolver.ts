import * as graphql from "@nestjs/graphql";
import { IniYearsExperienceResolverBase } from "./base/iniYearsExperience.resolver.base";
import { IniYearsExperience } from "./base/IniYearsExperience";
import { IniYearsExperienceService } from "./iniYearsExperience.service";

@graphql.Resolver(() => IniYearsExperience)
export class IniYearsExperienceResolver extends IniYearsExperienceResolverBase {
  constructor(protected readonly service: IniYearsExperienceService) {
    super(service);
  }
}
