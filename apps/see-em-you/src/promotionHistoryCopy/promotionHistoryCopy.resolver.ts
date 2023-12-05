import * as graphql from "@nestjs/graphql";
import { PromotionHistoryCopyResolverBase } from "./base/promotionHistoryCopy.resolver.base";
import { PromotionHistoryCopy } from "./base/PromotionHistoryCopy";
import { PromotionHistoryCopyService } from "./promotionHistoryCopy.service";

@graphql.Resolver(() => PromotionHistoryCopy)
export class PromotionHistoryCopyResolver extends PromotionHistoryCopyResolverBase {
  constructor(protected readonly service: PromotionHistoryCopyService) {
    super(service);
  }
}
