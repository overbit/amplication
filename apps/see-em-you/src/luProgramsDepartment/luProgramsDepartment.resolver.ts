import * as graphql from "@nestjs/graphql";
import { LuProgramsDepartmentResolverBase } from "./base/luProgramsDepartment.resolver.base";
import { LuProgramsDepartment } from "./base/LuProgramsDepartment";
import { LuProgramsDepartmentService } from "./luProgramsDepartment.service";

@graphql.Resolver(() => LuProgramsDepartment)
export class LuProgramsDepartmentResolver extends LuProgramsDepartmentResolverBase {
  constructor(protected readonly service: LuProgramsDepartmentService) {
    super(service);
  }
}
