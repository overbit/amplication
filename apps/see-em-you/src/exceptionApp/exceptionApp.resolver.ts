import * as graphql from "@nestjs/graphql";
import { ExceptionAppResolverBase } from "./base/exceptionApp.resolver.base";
import { ExceptionApp } from "./base/ExceptionApp";
import { ExceptionAppService } from "./exceptionApp.service";

@graphql.Resolver(() => ExceptionApp)
export class ExceptionAppResolver extends ExceptionAppResolverBase {
  constructor(protected readonly service: ExceptionAppService) {
    super(service);
  }
}
