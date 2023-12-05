import * as graphql from "@nestjs/graphql";
import { MseLetterRecsDecisionResolverBase } from "./base/mseLetterRecsDecision.resolver.base";
import { MseLetterRecsDecision } from "./base/MseLetterRecsDecision";
import { MseLetterRecsDecisionService } from "./mseLetterRecsDecision.service";

@graphql.Resolver(() => MseLetterRecsDecision)
export class MseLetterRecsDecisionResolver extends MseLetterRecsDecisionResolverBase {
  constructor(protected readonly service: MseLetterRecsDecisionService) {
    super(service);
  }
}
