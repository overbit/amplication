import * as graphql from "@nestjs/graphql";
import { ProgramTypeResolverBase } from "./base/programType.resolver.base";
import { ProgramType } from "./base/ProgramType";
import { ProgramTypeService } from "./programType.service";

@graphql.Resolver(() => ProgramType)
export class ProgramTypeResolver extends ProgramTypeResolverBase {
  constructor(protected readonly service: ProgramTypeService) {
    super(service);
  }
}
