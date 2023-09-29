import * as graphql from "@nestjs/graphql";
import { UnitRoleResolverBase } from "./base/unitRole.resolver.base";
import { UnitRole } from "./base/UnitRole";
import { UnitRoleService } from "./unitRole.service";

@graphql.Resolver(() => UnitRole)
export class UnitRoleResolver extends UnitRoleResolverBase {
  constructor(protected readonly service: UnitRoleService) {
    super(service);
  }
}
