import { ReviewIni as TReviewIni } from "../api/reviewIni/ReviewIni";

export const REVIEWINI_TITLE_FIELD = "technicalComments";

export const ReviewIniTitle = (record: TReviewIni): string => {
  return record.technicalComments?.toString() || String(record.id);
};
