import { PromotionHistory as TPromotionHistory } from "../api/promotionHistory/PromotionHistory";

export const PROMOTIONHISTORY_TITLE_FIELD = "id";

export const PromotionHistoryTitle = (record: TPromotionHistory): string => {
  return record.id?.toString() || String(record.id);
};
