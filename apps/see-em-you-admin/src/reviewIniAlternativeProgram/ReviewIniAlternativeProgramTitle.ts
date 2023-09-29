import { ReviewIniAlternativeProgram as TReviewIniAlternativeProgram } from "../api/reviewIniAlternativeProgram/ReviewIniAlternativeProgram";

export const REVIEWINIALTERNATIVEPROGRAM_TITLE_FIELD = "value";

export const ReviewIniAlternativeProgramTitle = (
  record: TReviewIniAlternativeProgram
): string => {
  return record.value?.toString() || String(record.id);
};
