import { MitsSlateReview as TMitsSlateReview } from "../api/mitsSlateReview/MitsSlateReview";

export const MITSSLATEREVIEW_TITLE_FIELD = "mseReviewFormNum1UserName";

export const MitsSlateReviewTitle = (record: TMitsSlateReview): string => {
  return record.mseReviewFormNum1UserName?.toString() || String(record.id);
};
