import { ReviewIniAdmin as TReviewIniAdmin } from "../api/reviewIniAdmin/ReviewIniAdmin";

export const REVIEWINIADMIN_TITLE_FIELD = "comments";

export const ReviewIniAdminTitle = (record: TReviewIniAdmin): string => {
  return record.comments?.toString() || String(record.id);
};
