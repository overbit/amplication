import * as graphql from "@nestjs/graphql";
import { MitsSlateGreResolverBase } from "./base/mitsSlateGre.resolver.base";
import { MitsSlateGre } from "./base/MitsSlateGre";
import { MitsSlateGreService } from "./mitsSlateGre.service";

@graphql.Resolver(() => MitsSlateGre)
export class MitsSlateGreResolver extends MitsSlateGreResolverBase {
  constructor(protected readonly service: MitsSlateGreService) {
    super(service);
  }
}
