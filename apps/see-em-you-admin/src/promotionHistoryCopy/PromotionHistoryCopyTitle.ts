import { PromotionHistoryCopy as TPromotionHistoryCopy } from "../api/promotionHistoryCopy/PromotionHistoryCopy";

export const PROMOTIONHISTORYCOPY_TITLE_FIELD = "id";

export const PromotionHistoryCopyTitle = (
  record: TPromotionHistoryCopy
): string => {
  return record.id?.toString() || String(record.id);
};
