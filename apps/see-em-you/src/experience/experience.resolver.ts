import * as graphql from "@nestjs/graphql";
import { ExperienceResolverBase } from "./base/experience.resolver.base";
import { Experience } from "./base/Experience";
import { ExperienceService } from "./experience.service";

@graphql.Resolver(() => Experience)
export class ExperienceResolver extends ExperienceResolverBase {
  constructor(protected readonly service: ExperienceService) {
    super(service);
  }
}
