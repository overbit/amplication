import * as graphql from "@nestjs/graphql";
import { MitsSlateRecommendResolverBase } from "./base/mitsSlateRecommend.resolver.base";
import { MitsSlateRecommend } from "./base/MitsSlateRecommend";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";

@graphql.Resolver(() => MitsSlateRecommend)
export class MitsSlateRecommendResolver extends MitsSlateRecommendResolverBase {
  constructor(protected readonly service: MitsSlateRecommendService) {
    super(service);
  }
}
