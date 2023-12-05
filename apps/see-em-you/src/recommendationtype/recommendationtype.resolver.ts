import * as graphql from "@nestjs/graphql";
import { RecommendationtypeResolverBase } from "./base/recommendationtype.resolver.base";
import { Recommendationtype } from "./base/Recommendationtype";
import { RecommendationtypeService } from "./recommendationtype.service";

@graphql.Resolver(() => Recommendationtype)
export class RecommendationtypeResolver extends RecommendationtypeResolverBase {
  constructor(protected readonly service: RecommendationtypeService) {
    super(service);
  }
}
