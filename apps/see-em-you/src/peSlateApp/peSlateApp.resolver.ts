import * as graphql from "@nestjs/graphql";
import { PeSlateAppResolverBase } from "./base/peSlateApp.resolver.base";
import { PeSlateApp } from "./base/PeSlateApp";
import { PeSlateAppService } from "./peSlateApp.service";

@graphql.Resolver(() => PeSlateApp)
export class PeSlateAppResolver extends PeSlateAppResolverBase {
  constructor(protected readonly service: PeSlateAppService) {
    super(service);
  }
}
