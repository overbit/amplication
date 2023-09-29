import { Recommendationtype as TRecommendationtype } from "../api/recommendationtype/Recommendationtype";

export const RECOMMENDATIONTYPE_TITLE_FIELD = "name";

export const RecommendationtypeTitle = (
  record: TRecommendationtype
): string => {
  return record.name?.toString() || String(record.id);
};
