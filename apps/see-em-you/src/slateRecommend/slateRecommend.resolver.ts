import * as graphql from "@nestjs/graphql";
import { SlateRecommendResolverBase } from "./base/slateRecommend.resolver.base";
import { SlateRecommend } from "./base/SlateRecommend";
import { SlateRecommendService } from "./slateRecommend.service";

@graphql.Resolver(() => SlateRecommend)
export class SlateRecommendResolver extends SlateRecommendResolverBase {
  constructor(protected readonly service: SlateRecommendService) {
    super(service);
  }
}
