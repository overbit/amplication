import * as graphql from "@nestjs/graphql";
import { MseRiskFactorResolverBase } from "./base/mseRiskFactor.resolver.base";
import { MseRiskFactor } from "./base/MseRiskFactor";
import { MseRiskFactorService } from "./mseRiskFactor.service";

@graphql.Resolver(() => MseRiskFactor)
export class MseRiskFactorResolver extends MseRiskFactorResolverBase {
  constructor(protected readonly service: MseRiskFactorService) {
    super(service);
  }
}
