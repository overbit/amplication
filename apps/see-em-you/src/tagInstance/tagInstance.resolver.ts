import * as graphql from "@nestjs/graphql";
import { TagInstanceResolverBase } from "./base/tagInstance.resolver.base";
import { TagInstance } from "./base/TagInstance";
import { TagInstanceService } from "./tagInstance.service";

@graphql.Resolver(() => TagInstance)
export class TagInstanceResolver extends TagInstanceResolverBase {
  constructor(protected readonly service: TagInstanceService) {
    super(service);
  }
}
