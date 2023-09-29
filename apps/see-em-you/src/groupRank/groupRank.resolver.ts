import * as graphql from "@nestjs/graphql";
import { GroupRankResolverBase } from "./base/groupRank.resolver.base";
import { GroupRank } from "./base/GroupRank";
import { GroupRankService } from "./groupRank.service";

@graphql.Resolver(() => GroupRank)
export class GroupRankResolver extends GroupRankResolverBase {
  constructor(protected readonly service: GroupRankService) {
    super(service);
  }
}
