import * as graphql from "@nestjs/graphql";
import { DuolingoscoreResolverBase } from "./base/duolingoscore.resolver.base";
import { Duolingoscore } from "./base/Duolingoscore";
import { DuolingoscoreService } from "./duolingoscore.service";

@graphql.Resolver(() => Duolingoscore)
export class DuolingoscoreResolver extends DuolingoscoreResolverBase {
  constructor(protected readonly service: DuolingoscoreService) {
    super(service);
  }
}
