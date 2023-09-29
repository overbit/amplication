import { LuReviewInterest as TLuReviewInterest } from "../api/luReviewInterest/LuReviewInterest";

export const LUREVIEWINTEREST_TITLE_FIELD = "id";

export const LuReviewInterestTitle = (record: TLuReviewInterest): string => {
  return record.id?.toString() || String(record.id);
};
