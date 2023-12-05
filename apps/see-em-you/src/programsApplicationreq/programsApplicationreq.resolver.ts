import * as graphql from "@nestjs/graphql";
import { ProgramsApplicationreqResolverBase } from "./base/programsApplicationreq.resolver.base";
import { ProgramsApplicationreq } from "./base/ProgramsApplicationreq";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";

@graphql.Resolver(() => ProgramsApplicationreq)
export class ProgramsApplicationreqResolver extends ProgramsApplicationreqResolverBase {
  constructor(protected readonly service: ProgramsApplicationreqService) {
    super(service);
  }
}
