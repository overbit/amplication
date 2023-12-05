import * as graphql from "@nestjs/graphql";
import { LuUserDepartmentResolverBase } from "./base/luUserDepartment.resolver.base";
import { LuUserDepartment } from "./base/LuUserDepartment";
import { LuUserDepartmentService } from "./luUserDepartment.service";

@graphql.Resolver(() => LuUserDepartment)
export class LuUserDepartmentResolver extends LuUserDepartmentResolverBase {
  constructor(protected readonly service: LuUserDepartmentService) {
    super(service);
  }
}
