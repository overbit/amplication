import * as graphql from "@nestjs/graphql";
import { MitsSlateRecommend1ResolverBase } from "./base/mitsSlateRecommend1.resolver.base";
import { MitsSlateRecommend1 } from "./base/MitsSlateRecommend1";
import { MitsSlateRecommend1Service } from "./mitsSlateRecommend1.service";

@graphql.Resolver(() => MitsSlateRecommend1)
export class MitsSlateRecommend1Resolver extends MitsSlateRecommend1ResolverBase {
  constructor(protected readonly service: MitsSlateRecommend1Service) {
    super(service);
  }
}
