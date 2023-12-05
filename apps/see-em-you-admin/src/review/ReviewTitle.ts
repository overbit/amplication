import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "gradName";

export const ReviewTitle = (record: TReview): string => {
  return record.gradName?.toString() || String(record.id);
};
