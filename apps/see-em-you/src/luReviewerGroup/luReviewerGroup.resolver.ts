import * as graphql from "@nestjs/graphql";
import { LuReviewerGroupResolverBase } from "./base/luReviewerGroup.resolver.base";
import { LuReviewerGroup } from "./base/LuReviewerGroup";
import { LuReviewerGroupService } from "./luReviewerGroup.service";

@graphql.Resolver(() => LuReviewerGroup)
export class LuReviewerGroupResolver extends LuReviewerGroupResolverBase {
  constructor(protected readonly service: LuReviewerGroupService) {
    super(service);
  }
}
