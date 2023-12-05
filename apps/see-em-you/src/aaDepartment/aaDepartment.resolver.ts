import * as graphql from "@nestjs/graphql";
import { AaDepartmentResolverBase } from "./base/aaDepartment.resolver.base";
import { AaDepartment } from "./base/AaDepartment";
import { AaDepartmentService } from "./aaDepartment.service";

@graphql.Resolver(() => AaDepartment)
export class AaDepartmentResolver extends AaDepartmentResolverBase {
  constructor(protected readonly service: AaDepartmentService) {
    super(service);
  }
}
