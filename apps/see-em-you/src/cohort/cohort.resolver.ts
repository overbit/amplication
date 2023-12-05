import * as graphql from "@nestjs/graphql";
import { CohortResolverBase } from "./base/cohort.resolver.base";
import { Cohort } from "./base/Cohort";
import { CohortService } from "./cohort.service";

@graphql.Resolver(() => Cohort)
export class CohortResolver extends CohortResolverBase {
  constructor(protected readonly service: CohortService) {
    super(service);
  }
}
