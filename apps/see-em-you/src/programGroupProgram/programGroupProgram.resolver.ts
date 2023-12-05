import * as graphql from "@nestjs/graphql";
import { ProgramGroupProgramResolverBase } from "./base/programGroupProgram.resolver.base";
import { ProgramGroupProgram } from "./base/ProgramGroupProgram";
import { ProgramGroupProgramService } from "./programGroupProgram.service";

@graphql.Resolver(() => ProgramGroupProgram)
export class ProgramGroupProgramResolver extends ProgramGroupProgramResolverBase {
  constructor(protected readonly service: ProgramGroupProgramService) {
    super(service);
  }
}
