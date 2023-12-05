import * as graphql from "@nestjs/graphql";
import { TeachingExperienceResolverBase } from "./base/teachingExperience.resolver.base";
import { TeachingExperience } from "./base/TeachingExperience";
import { TeachingExperienceService } from "./teachingExperience.service";

@graphql.Resolver(() => TeachingExperience)
export class TeachingExperienceResolver extends TeachingExperienceResolverBase {
  constructor(protected readonly service: TeachingExperienceService) {
    super(service);
  }
}
