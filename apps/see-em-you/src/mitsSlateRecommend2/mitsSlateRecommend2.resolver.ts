import * as graphql from "@nestjs/graphql";
import { MitsSlateRecommend2ResolverBase } from "./base/mitsSlateRecommend2.resolver.base";
import { MitsSlateRecommend2 } from "./base/MitsSlateRecommend2";
import { MitsSlateRecommend2Service } from "./mitsSlateRecommend2.service";

@graphql.Resolver(() => MitsSlateRecommend2)
export class MitsSlateRecommend2Resolver extends MitsSlateRecommend2ResolverBase {
  constructor(protected readonly service: MitsSlateRecommend2Service) {
    super(service);
  }
}
