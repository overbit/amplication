import * as graphql from "@nestjs/graphql";
import { ErrorlogResolverBase } from "./base/errorlog.resolver.base";
import { Errorlog } from "./base/Errorlog";
import { ErrorlogService } from "./errorlog.service";

@graphql.Resolver(() => Errorlog)
export class ErrorlogResolver extends ErrorlogResolverBase {
  constructor(protected readonly service: ErrorlogService) {
    super(service);
  }
}
