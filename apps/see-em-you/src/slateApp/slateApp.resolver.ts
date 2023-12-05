import * as graphql from "@nestjs/graphql";
import { SlateAppResolverBase } from "./base/slateApp.resolver.base";
import { SlateApp } from "./base/SlateApp";
import { SlateAppService } from "./slateApp.service";

@graphql.Resolver(() => SlateApp)
export class SlateAppResolver extends SlateAppResolverBase {
  constructor(protected readonly service: SlateAppService) {
    super(service);
  }
}
