import * as graphql from "@nestjs/graphql";
import { MitsSlateRecommend3ResolverBase } from "./base/mitsSlateRecommend3.resolver.base";
import { MitsSlateRecommend3 } from "./base/MitsSlateRecommend3";
import { MitsSlateRecommend3Service } from "./mitsSlateRecommend3.service";

@graphql.Resolver(() => MitsSlateRecommend3)
export class MitsSlateRecommend3Resolver extends MitsSlateRecommend3ResolverBase {
  constructor(protected readonly service: MitsSlateRecommend3Service) {
    super(service);
  }
}
