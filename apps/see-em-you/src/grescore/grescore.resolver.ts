import * as graphql from "@nestjs/graphql";
import { GrescoreResolverBase } from "./base/grescore.resolver.base";
import { Grescore } from "./base/Grescore";
import { GrescoreService } from "./grescore.service";

@graphql.Resolver(() => Grescore)
export class GrescoreResolver extends GrescoreResolverBase {
  constructor(protected readonly service: GrescoreService) {
    super(service);
  }
}
