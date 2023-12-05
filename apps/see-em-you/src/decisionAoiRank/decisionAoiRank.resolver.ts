import * as graphql from "@nestjs/graphql";
import { DecisionAoiRankResolverBase } from "./base/decisionAoiRank.resolver.base";
import { DecisionAoiRank } from "./base/DecisionAoiRank";
import { DecisionAoiRankService } from "./decisionAoiRank.service";

@graphql.Resolver(() => DecisionAoiRank)
export class DecisionAoiRankResolver extends DecisionAoiRankResolverBase {
  constructor(protected readonly service: DecisionAoiRankService) {
    super(service);
  }
}
