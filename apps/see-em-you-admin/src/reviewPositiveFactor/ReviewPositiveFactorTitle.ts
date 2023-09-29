import { ReviewPositiveFactor as TReviewPositiveFactor } from "../api/reviewPositiveFactor/ReviewPositiveFactor";

export const REVIEWPOSITIVEFACTOR_TITLE_FIELD = "id";

export const ReviewPositiveFactorTitle = (
  record: TReviewPositiveFactor
): string => {
  return record.id?.toString() || String(record.id);
};
