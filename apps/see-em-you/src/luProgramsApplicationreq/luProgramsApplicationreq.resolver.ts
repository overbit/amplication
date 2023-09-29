import * as graphql from "@nestjs/graphql";
import { LuProgramsApplicationreqResolverBase } from "./base/luProgramsApplicationreq.resolver.base";
import { LuProgramsApplicationreq } from "./base/LuProgramsApplicationreq";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";

@graphql.Resolver(() => LuProgramsApplicationreq)
export class LuProgramsApplicationreqResolver extends LuProgramsApplicationreqResolverBase {
  constructor(protected readonly service: LuProgramsApplicationreqService) {
    super(service);
  }
}
