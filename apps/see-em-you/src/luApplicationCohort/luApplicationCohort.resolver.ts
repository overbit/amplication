import * as graphql from "@nestjs/graphql";
import { LuApplicationCohortResolverBase } from "./base/luApplicationCohort.resolver.base";
import { LuApplicationCohort } from "./base/LuApplicationCohort";
import { LuApplicationCohortService } from "./luApplicationCohort.service";

@graphql.Resolver(() => LuApplicationCohort)
export class LuApplicationCohortResolver extends LuApplicationCohortResolverBase {
  constructor(protected readonly service: LuApplicationCohortService) {
    super(service);
  }
}
