import * as graphql from "@nestjs/graphql";
import { TagMemberResolverBase } from "./base/tagMember.resolver.base";
import { TagMember } from "./base/TagMember";
import { TagMemberService } from "./tagMember.service";

@graphql.Resolver(() => TagMember)
export class TagMemberResolver extends TagMemberResolverBase {
  constructor(protected readonly service: TagMemberService) {
    super(service);
  }
}
