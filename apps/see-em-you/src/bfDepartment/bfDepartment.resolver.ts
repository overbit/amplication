import * as graphql from "@nestjs/graphql";
import { BfDepartmentResolverBase } from "./base/bfDepartment.resolver.base";
import { BfDepartment } from "./base/BfDepartment";
import { BfDepartmentService } from "./bfDepartment.service";

@graphql.Resolver(() => BfDepartment)
export class BfDepartmentResolver extends BfDepartmentResolverBase {
  constructor(protected readonly service: BfDepartmentService) {
    super(service);
  }
}
