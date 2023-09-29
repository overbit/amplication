import * as graphql from "@nestjs/graphql";
import { LuProgramsInterestResolverBase } from "./base/luProgramsInterest.resolver.base";
import { LuProgramsInterest } from "./base/LuProgramsInterest";
import { LuProgramsInterestService } from "./luProgramsInterest.service";

@graphql.Resolver(() => LuProgramsInterest)
export class LuProgramsInterestResolver extends LuProgramsInterestResolverBase {
  constructor(protected readonly service: LuProgramsInterestService) {
    super(service);
  }
}
