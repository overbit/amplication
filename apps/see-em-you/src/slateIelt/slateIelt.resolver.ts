import * as graphql from "@nestjs/graphql";
import { SlateIeltResolverBase } from "./base/slateIelt.resolver.base";
import { SlateIelt } from "./base/SlateIelt";
import { SlateIeltService } from "./slateIelt.service";

@graphql.Resolver(() => SlateIelt)
export class SlateIeltResolver extends SlateIeltResolverBase {
  constructor(protected readonly service: SlateIeltService) {
    super(service);
  }
}
