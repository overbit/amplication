import * as graphql from "@nestjs/graphql";
import { DepartmentUnitResolverBase } from "./base/departmentUnit.resolver.base";
import { DepartmentUnit } from "./base/DepartmentUnit";
import { DepartmentUnitService } from "./departmentUnit.service";

@graphql.Resolver(() => DepartmentUnit)
export class DepartmentUnitResolver extends DepartmentUnitResolverBase {
  constructor(protected readonly service: DepartmentUnitService) {
    super(service);
  }
}
