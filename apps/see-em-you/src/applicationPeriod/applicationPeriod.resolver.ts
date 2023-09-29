import * as graphql from "@nestjs/graphql";
import { ApplicationPeriodResolverBase } from "./base/applicationPeriod.resolver.base";
import { ApplicationPeriod } from "./base/ApplicationPeriod";
import { ApplicationPeriodService } from "./applicationPeriod.service";

@graphql.Resolver(() => ApplicationPeriod)
export class ApplicationPeriodResolver extends ApplicationPeriodResolverBase {
  constructor(protected readonly service: ApplicationPeriodService) {
    super(service);
  }
}
