import * as graphql from "@nestjs/graphql";
import { RecommenderInfoResolverBase } from "./base/recommenderInfo.resolver.base";
import { RecommenderInfo } from "./base/RecommenderInfo";
import { RecommenderInfoService } from "./recommenderInfo.service";

@graphql.Resolver(() => RecommenderInfo)
export class RecommenderInfoResolver extends RecommenderInfoResolverBase {
  constructor(protected readonly service: RecommenderInfoService) {
    super(service);
  }
}
