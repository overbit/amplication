import * as graphql from "@nestjs/graphql";
import { ProgramResolverBase } from "./base/program.resolver.base";
import { Program } from "./base/Program";
import { ProgramService } from "./program.service";

@graphql.Resolver(() => Program)
export class ProgramResolver extends ProgramResolverBase {
  constructor(protected readonly service: ProgramService) {
    super(service);
  }
}
