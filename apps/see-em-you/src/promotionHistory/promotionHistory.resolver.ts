import * as graphql from "@nestjs/graphql";
import { PromotionHistoryResolverBase } from "./base/promotionHistory.resolver.base";
import { PromotionHistory } from "./base/PromotionHistory";
import { PromotionHistoryService } from "./promotionHistory.service";

@graphql.Resolver(() => PromotionHistory)
export class PromotionHistoryResolver extends PromotionHistoryResolverBase {
  constructor(protected readonly service: PromotionHistoryService) {
    super(service);
  }
}
