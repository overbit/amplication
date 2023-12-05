import * as graphql from "@nestjs/graphql";
import { PeriodProgramResolverBase } from "./base/periodProgram.resolver.base";
import { PeriodProgram } from "./base/PeriodProgram";
import { PeriodProgramService } from "./periodProgram.service";

@graphql.Resolver(() => PeriodProgram)
export class PeriodProgramResolver extends PeriodProgramResolverBase {
  constructor(protected readonly service: PeriodProgramService) {
    super(service);
  }
}
