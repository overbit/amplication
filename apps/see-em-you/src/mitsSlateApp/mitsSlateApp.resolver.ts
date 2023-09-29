import * as graphql from "@nestjs/graphql";
import { MitsSlateAppResolverBase } from "./base/mitsSlateApp.resolver.base";
import { MitsSlateApp } from "./base/MitsSlateApp";
import { MitsSlateAppService } from "./mitsSlateApp.service";

@graphql.Resolver(() => MitsSlateApp)
export class MitsSlateAppResolver extends MitsSlateAppResolverBase {
  constructor(protected readonly service: MitsSlateAppService) {
    super(service);
  }
}
