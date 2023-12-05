import * as graphql from "@nestjs/graphql";
import { DepartmentReplyperiodResolverBase } from "./base/departmentReplyperiod.resolver.base";
import { DepartmentReplyperiod } from "./base/DepartmentReplyperiod";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";

@graphql.Resolver(() => DepartmentReplyperiod)
export class DepartmentReplyperiodResolver extends DepartmentReplyperiodResolverBase {
  constructor(protected readonly service: DepartmentReplyperiodService) {
    super(service);
  }
}
