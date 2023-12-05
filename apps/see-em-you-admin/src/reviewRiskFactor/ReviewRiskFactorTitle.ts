import { ReviewRiskFactor as TReviewRiskFactor } from "../api/reviewRiskFactor/ReviewRiskFactor";

export const REVIEWRISKFACTOR_TITLE_FIELD = "id";

export const ReviewRiskFactorTitle = (record: TReviewRiskFactor): string => {
  return record.id?.toString() || String(record.id);
};
