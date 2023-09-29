import * as graphql from "@nestjs/graphql";
import { UnitPeriodResolverBase } from "./base/unitPeriod.resolver.base";
import { UnitPeriod } from "./base/UnitPeriod";
import { UnitPeriodService } from "./unitPeriod.service";

@graphql.Resolver(() => UnitPeriod)
export class UnitPeriodResolver extends UnitPeriodResolverBase {
  constructor(protected readonly service: UnitPeriodService) {
    super(service);
  }
}
