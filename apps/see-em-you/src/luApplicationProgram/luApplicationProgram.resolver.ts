import * as graphql from "@nestjs/graphql";
import { LuApplicationProgramResolverBase } from "./base/luApplicationProgram.resolver.base";
import { LuApplicationProgram } from "./base/LuApplicationProgram";
import { LuApplicationProgramService } from "./luApplicationProgram.service";

@graphql.Resolver(() => LuApplicationProgram)
export class LuApplicationProgramResolver extends LuApplicationProgramResolverBase {
  constructor(protected readonly service: LuApplicationProgramService) {
    super(service);
  }
}
