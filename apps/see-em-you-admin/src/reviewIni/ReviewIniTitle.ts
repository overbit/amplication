import { ReviewIni as TReviewIni } from "../api/reviewIni/ReviewIni";

export const REVIEWINI_TITLE_FIELD = "academicComments";

export const ReviewIniTitle = (record: TReviewIni): string => {
  return record.academicComments?.toString() || String(record.id);
};
