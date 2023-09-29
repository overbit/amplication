import { PromotionStatus as TPromotionStatus } from "../api/promotionStatus/PromotionStatus";

export const PROMOTIONSTATUS_TITLE_FIELD = "id";

export const PromotionStatusTitle = (record: TPromotionStatus): string => {
  return record.id?.toString() || String(record.id);
};
