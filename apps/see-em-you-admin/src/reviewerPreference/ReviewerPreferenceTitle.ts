import { ReviewerPreference as TReviewerPreference } from "../api/reviewerPreference/ReviewerPreference";

export const REVIEWERPREFERENCE_TITLE_FIELD = "id";

export const ReviewerPreferenceTitle = (
  record: TReviewerPreference
): string => {
  return record.id?.toString() || String(record.id);
};
