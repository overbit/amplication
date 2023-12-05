import * as graphql from "@nestjs/graphql";
import { DecisionRankMemberResolverBase } from "./base/decisionRankMember.resolver.base";
import { DecisionRankMember } from "./base/DecisionRankMember";
import { DecisionRankMemberService } from "./decisionRankMember.service";

@graphql.Resolver(() => DecisionRankMember)
export class DecisionRankMemberResolver extends DecisionRankMemberResolverBase {
  constructor(protected readonly service: DecisionRankMemberService) {
    super(service);
  }
}
