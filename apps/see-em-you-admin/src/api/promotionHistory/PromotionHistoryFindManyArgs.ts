import { PromotionHistoryWhereInput } from "./PromotionHistoryWhereInput";
import { PromotionHistoryOrderByInput } from "./PromotionHistoryOrderByInput";

export type PromotionHistoryFindManyArgs = {
  where?: PromotionHistoryWhereInput;
  orderBy?: Array<PromotionHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
