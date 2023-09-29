import * as graphql from "@nestjs/graphql";
import { GroupRankMemberResolverBase } from "./base/groupRankMember.resolver.base";
import { GroupRankMember } from "./base/GroupRankMember";
import { GroupRankMemberService } from "./groupRankMember.service";

@graphql.Resolver(() => GroupRankMember)
export class GroupRankMemberResolver extends GroupRankMemberResolverBase {
  constructor(protected readonly service: GroupRankMemberService) {
    super(service);
  }
}
