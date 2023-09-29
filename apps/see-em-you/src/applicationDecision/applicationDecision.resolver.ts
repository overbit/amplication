import * as graphql from "@nestjs/graphql";
import { ApplicationDecisionResolverBase } from "./base/applicationDecision.resolver.base";
import { ApplicationDecision } from "./base/ApplicationDecision";
import { ApplicationDecisionService } from "./applicationDecision.service";

@graphql.Resolver(() => ApplicationDecision)
export class ApplicationDecisionResolver extends ApplicationDecisionResolverBase {
  constructor(protected readonly service: ApplicationDecisionService) {
    super(service);
  }
}
