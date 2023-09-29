import * as graphql from "@nestjs/graphql";
import { DietrichDiversityResolverBase } from "./base/dietrichDiversity.resolver.base";
import { DietrichDiversity } from "./base/DietrichDiversity";
import { DietrichDiversityService } from "./dietrichDiversity.service";

@graphql.Resolver(() => DietrichDiversity)
export class DietrichDiversityResolver extends DietrichDiversityResolverBase {
  constructor(protected readonly service: DietrichDiversityService) {
    super(service);
  }
}
