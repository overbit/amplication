import * as graphql from "@nestjs/graphql";
import { SlateProgramResolverBase } from "./base/slateProgram.resolver.base";
import { SlateProgram } from "./base/SlateProgram";
import { SlateProgramService } from "./slateProgram.service";

@graphql.Resolver(() => SlateProgram)
export class SlateProgramResolver extends SlateProgramResolverBase {
  constructor(protected readonly service: SlateProgramService) {
    super(service);
  }
}
