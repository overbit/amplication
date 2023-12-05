import * as graphql from "@nestjs/graphql";
import { LangProfRecommenderInfoResolverBase } from "./base/langProfRecommenderInfo.resolver.base";
import { LangProfRecommenderInfo } from "./base/LangProfRecommenderInfo";
import { LangProfRecommenderInfoService } from "./langProfRecommenderInfo.service";

@graphql.Resolver(() => LangProfRecommenderInfo)
export class LangProfRecommenderInfoResolver extends LangProfRecommenderInfoResolverBase {
  constructor(protected readonly service: LangProfRecommenderInfoService) {
    super(service);
  }
}
