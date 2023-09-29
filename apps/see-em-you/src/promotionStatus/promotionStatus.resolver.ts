import * as graphql from "@nestjs/graphql";
import { PromotionStatusResolverBase } from "./base/promotionStatus.resolver.base";
import { PromotionStatus } from "./base/PromotionStatus";
import { PromotionStatusService } from "./promotionStatus.service";

@graphql.Resolver(() => PromotionStatus)
export class PromotionStatusResolver extends PromotionStatusResolverBase {
  constructor(protected readonly service: PromotionStatusService) {
    super(service);
  }
}
