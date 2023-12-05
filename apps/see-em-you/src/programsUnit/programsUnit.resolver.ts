import * as graphql from "@nestjs/graphql";
import { ProgramsUnitResolverBase } from "./base/programsUnit.resolver.base";
import { ProgramsUnit } from "./base/ProgramsUnit";
import { ProgramsUnitService } from "./programsUnit.service";

@graphql.Resolver(() => ProgramsUnit)
export class ProgramsUnitResolver extends ProgramsUnitResolverBase {
  constructor(protected readonly service: ProgramsUnitService) {
    super(service);
  }
}
