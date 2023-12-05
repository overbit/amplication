import * as graphql from "@nestjs/graphql";
import { ProgramGroupRoleResolverBase } from "./base/programGroupRole.resolver.base";
import { ProgramGroupRole } from "./base/ProgramGroupRole";
import { ProgramGroupRoleService } from "./programGroupRole.service";

@graphql.Resolver(() => ProgramGroupRole)
export class ProgramGroupRoleResolver extends ProgramGroupRoleResolverBase {
  constructor(protected readonly service: ProgramGroupRoleService) {
    super(service);
  }
}
