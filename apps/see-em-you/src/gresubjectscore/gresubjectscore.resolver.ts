import * as graphql from "@nestjs/graphql";
import { GresubjectscoreResolverBase } from "./base/gresubjectscore.resolver.base";
import { Gresubjectscore } from "./base/Gresubjectscore";
import { GresubjectscoreService } from "./gresubjectscore.service";

@graphql.Resolver(() => Gresubjectscore)
export class GresubjectscoreResolver extends GresubjectscoreResolverBase {
  constructor(protected readonly service: GresubjectscoreService) {
    super(service);
  }
}
