import * as graphql from "@nestjs/graphql";
import { DecisionAoiRankMemberResolverBase } from "./base/decisionAoiRankMember.resolver.base";
import { DecisionAoiRankMember } from "./base/DecisionAoiRankMember";
import { DecisionAoiRankMemberService } from "./decisionAoiRankMember.service";

@graphql.Resolver(() => DecisionAoiRankMember)
export class DecisionAoiRankMemberResolver extends DecisionAoiRankMemberResolverBase {
  constructor(protected readonly service: DecisionAoiRankMemberService) {
    super(service);
  }
}
