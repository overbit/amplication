import * as graphql from "@nestjs/graphql";
import { SlateRecommend2ResolverBase } from "./base/slateRecommend2.resolver.base";
import { SlateRecommend2 } from "./base/SlateRecommend2";
import { SlateRecommend2Service } from "./slateRecommend2.service";

@graphql.Resolver(() => SlateRecommend2)
export class SlateRecommend2Resolver extends SlateRecommend2ResolverBase {
  constructor(protected readonly service: SlateRecommend2Service) {
    super(service);
  }
}
