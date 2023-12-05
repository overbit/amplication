import * as graphql from "@nestjs/graphql";
import { IeltsscoreResolverBase } from "./base/ieltsscore.resolver.base";
import { Ieltsscore } from "./base/Ieltsscore";
import { IeltsscoreService } from "./ieltsscore.service";

@graphql.Resolver(() => Ieltsscore)
export class IeltsscoreResolver extends IeltsscoreResolverBase {
  constructor(protected readonly service: IeltsscoreService) {
    super(service);
  }
}
