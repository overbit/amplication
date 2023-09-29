import * as graphql from "@nestjs/graphql";
import { DecisionRankResolverBase } from "./base/decisionRank.resolver.base";
import { DecisionRank } from "./base/DecisionRank";
import { DecisionRankService } from "./decisionRank.service";

@graphql.Resolver(() => DecisionRank)
export class DecisionRankResolver extends DecisionRankResolverBase {
  constructor(protected readonly service: DecisionRankService) {
    super(service);
  }
}
