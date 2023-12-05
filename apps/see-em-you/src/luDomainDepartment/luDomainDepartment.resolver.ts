import * as graphql from "@nestjs/graphql";
import { LuDomainDepartmentResolverBase } from "./base/luDomainDepartment.resolver.base";
import { LuDomainDepartment } from "./base/LuDomainDepartment";
import { LuDomainDepartmentService } from "./luDomainDepartment.service";

@graphql.Resolver(() => LuDomainDepartment)
export class LuDomainDepartmentResolver extends LuDomainDepartmentResolverBase {
  constructor(protected readonly service: LuDomainDepartmentService) {
    super(service);
  }
}
