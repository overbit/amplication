import * as graphql from "@nestjs/graphql";
import { LangProfRecommendResolverBase } from "./base/langProfRecommend.resolver.base";
import { LangProfRecommend } from "./base/LangProfRecommend";
import { LangProfRecommendService } from "./langProfRecommend.service";

@graphql.Resolver(() => LangProfRecommend)
export class LangProfRecommendResolver extends LangProfRecommendResolverBase {
  constructor(protected readonly service: LangProfRecommendService) {
    super(service);
  }
}
