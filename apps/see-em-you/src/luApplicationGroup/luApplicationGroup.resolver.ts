import * as graphql from "@nestjs/graphql";
import { LuApplicationGroupResolverBase } from "./base/luApplicationGroup.resolver.base";
import { LuApplicationGroup } from "./base/LuApplicationGroup";
import { LuApplicationGroupService } from "./luApplicationGroup.service";

@graphql.Resolver(() => LuApplicationGroup)
export class LuApplicationGroupResolver extends LuApplicationGroupResolverBase {
  constructor(protected readonly service: LuApplicationGroupService) {
    super(service);
  }
}
