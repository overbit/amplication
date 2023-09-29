import * as graphql from "@nestjs/graphql";
import { PeriodApplicationResolverBase } from "./base/periodApplication.resolver.base";
import { PeriodApplication } from "./base/PeriodApplication";
import { PeriodApplicationService } from "./periodApplication.service";

@graphql.Resolver(() => PeriodApplication)
export class PeriodApplicationResolver extends PeriodApplicationResolverBase {
  constructor(protected readonly service: PeriodApplicationService) {
    super(service);
  }
}
