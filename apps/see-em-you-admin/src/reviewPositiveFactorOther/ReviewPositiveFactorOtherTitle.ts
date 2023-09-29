import { ReviewPositiveFactorOther as TReviewPositiveFactorOther } from "../api/reviewPositiveFactorOther/ReviewPositiveFactorOther";

export const REVIEWPOSITIVEFACTOROTHER_TITLE_FIELD = "positiveFactorOther";

export const ReviewPositiveFactorOtherTitle = (
  record: TReviewPositiveFactorOther
): string => {
  return record.positiveFactorOther?.toString() || String(record.id);
};
