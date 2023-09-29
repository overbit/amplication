import * as graphql from "@nestjs/graphql";
import { MitsSlateIeltResolverBase } from "./base/mitsSlateIelt.resolver.base";
import { MitsSlateIelt } from "./base/MitsSlateIelt";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";

@graphql.Resolver(() => MitsSlateIelt)
export class MitsSlateIeltResolver extends MitsSlateIeltResolverBase {
  constructor(protected readonly service: MitsSlateIeltService) {
    super(service);
  }
}
