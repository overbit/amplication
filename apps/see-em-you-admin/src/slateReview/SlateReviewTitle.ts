import { SlateReview as TSlateReview } from "../api/slateReview/SlateReview";

export const SLATEREVIEW_TITLE_FIELD = "mseReviewFormNum2UserName";

export const SlateReviewTitle = (record: TSlateReview): string => {
  return record.mseReviewFormNum2UserName?.toString() || String(record.id);
};
