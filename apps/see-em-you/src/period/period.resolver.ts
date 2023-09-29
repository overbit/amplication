import * as graphql from "@nestjs/graphql";
import { PeriodResolverBase } from "./base/period.resolver.base";
import { Period } from "./base/Period";
import { PeriodService } from "./period.service";

@graphql.Resolver(() => Period)
export class PeriodResolver extends PeriodResolverBase {
  constructor(protected readonly service: PeriodService) {
    super(service);
  }
}
