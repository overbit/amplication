import * as graphql from "@nestjs/graphql";
import { DepartmentEnableRecyclingResolverBase } from "./base/departmentEnableRecycling.resolver.base";
import { DepartmentEnableRecycling } from "./base/DepartmentEnableRecycling";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";

@graphql.Resolver(() => DepartmentEnableRecycling)
export class DepartmentEnableRecyclingResolver extends DepartmentEnableRecyclingResolverBase {
  constructor(protected readonly service: DepartmentEnableRecyclingService) {
    super(service);
  }
}
