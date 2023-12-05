import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromotionStatusService } from "./promotionStatus.service";
import { PromotionStatusControllerBase } from "./base/promotionStatus.controller.base";

@swagger.ApiTags("promotionStatuses")
@common.Controller("promotionStatuses")
export class PromotionStatusController extends PromotionStatusControllerBase {
  constructor(protected readonly service: PromotionStatusService) {
    super(service);
  }
}
