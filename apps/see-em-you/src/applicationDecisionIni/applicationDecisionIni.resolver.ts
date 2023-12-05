import * as graphql from "@nestjs/graphql";
import { ApplicationDecisionIniResolverBase } from "./base/applicationDecisionIni.resolver.base";
import { ApplicationDecisionIni } from "./base/ApplicationDecisionIni";
import { ApplicationDecisionIniService } from "./applicationDecisionIni.service";

@graphql.Resolver(() => ApplicationDecisionIni)
export class ApplicationDecisionIniResolver extends ApplicationDecisionIniResolverBase {
  constructor(protected readonly service: ApplicationDecisionIniService) {
    super(service);
  }
}
