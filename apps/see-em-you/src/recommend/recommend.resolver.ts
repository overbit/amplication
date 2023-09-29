import * as graphql from "@nestjs/graphql";
import { RecommendResolverBase } from "./base/recommend.resolver.base";
import { Recommend } from "./base/Recommend";
import { RecommendService } from "./recommend.service";

@graphql.Resolver(() => Recommend)
export class RecommendResolver extends RecommendResolverBase {
  constructor(protected readonly service: RecommendService) {
    super(service);
  }
}
