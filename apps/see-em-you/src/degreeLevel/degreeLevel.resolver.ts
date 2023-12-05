import * as graphql from "@nestjs/graphql";
import { DegreeLevelResolverBase } from "./base/degreeLevel.resolver.base";
import { DegreeLevel } from "./base/DegreeLevel";
import { DegreeLevelService } from "./degreeLevel.service";

@graphql.Resolver(() => DegreeLevel)
export class DegreeLevelResolver extends DegreeLevelResolverBase {
  constructor(protected readonly service: DegreeLevelService) {
    super(service);
  }
}
