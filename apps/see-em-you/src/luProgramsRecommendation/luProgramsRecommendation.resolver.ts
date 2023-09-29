import * as graphql from "@nestjs/graphql";
import { LuProgramsRecommendationResolverBase } from "./base/luProgramsRecommendation.resolver.base";
import { LuProgramsRecommendation } from "./base/LuProgramsRecommendation";
import { LuProgramsRecommendationService } from "./luProgramsRecommendation.service";

@graphql.Resolver(() => LuProgramsRecommendation)
export class LuProgramsRecommendationResolver extends LuProgramsRecommendationResolverBase {
  constructor(protected readonly service: LuProgramsRecommendationService) {
    super(service);
  }
}
