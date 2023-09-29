import * as graphql from "@nestjs/graphql";
import { GmatscoreResolverBase } from "./base/gmatscore.resolver.base";
import { Gmatscore } from "./base/Gmatscore";
import { GmatscoreService } from "./gmatscore.service";

@graphql.Resolver(() => Gmatscore)
export class GmatscoreResolver extends GmatscoreResolverBase {
  constructor(protected readonly service: GmatscoreService) {
    super(service);
  }
}
