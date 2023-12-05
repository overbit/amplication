import * as graphql from "@nestjs/graphql";
import { MseRiskFactorsDecisionResolverBase } from "./base/mseRiskFactorsDecision.resolver.base";
import { MseRiskFactorsDecision } from "./base/MseRiskFactorsDecision";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";

@graphql.Resolver(() => MseRiskFactorsDecision)
export class MseRiskFactorsDecisionResolver extends MseRiskFactorsDecisionResolverBase {
  constructor(protected readonly service: MseRiskFactorsDecisionService) {
    super(service);
  }
}
