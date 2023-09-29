import * as graphql from "@nestjs/graphql";
import { SystemenvResolverBase } from "./base/systemenv.resolver.base";
import { Systemenv } from "./base/Systemenv";
import { SystemenvService } from "./systemenv.service";

@graphql.Resolver(() => Systemenv)
export class SystemenvResolver extends SystemenvResolverBase {
  constructor(protected readonly service: SystemenvService) {
    super(service);
  }
}
