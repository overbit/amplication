import * as graphql from "@nestjs/graphql";
import { RiskFactorResolverBase } from "./base/riskFactor.resolver.base";
import { RiskFactor } from "./base/RiskFactor";
import { RiskFactorService } from "./riskFactor.service";

@graphql.Resolver(() => RiskFactor)
export class RiskFactorResolver extends RiskFactorResolverBase {
  constructor(protected readonly service: RiskFactorService) {
    super(service);
  }
}
