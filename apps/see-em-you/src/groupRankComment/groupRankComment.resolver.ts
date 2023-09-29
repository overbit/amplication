import * as graphql from "@nestjs/graphql";
import { GroupRankCommentResolverBase } from "./base/groupRankComment.resolver.base";
import { GroupRankComment } from "./base/GroupRankComment";
import { GroupRankCommentService } from "./groupRankComment.service";

@graphql.Resolver(() => GroupRankComment)
export class GroupRankCommentResolver extends GroupRankCommentResolverBase {
  constructor(protected readonly service: GroupRankCommentService) {
    super(service);
  }
}
