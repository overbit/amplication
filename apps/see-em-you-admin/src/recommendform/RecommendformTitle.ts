import { Recommendform as TRecommendform } from "../api/recommendform/Recommendform";

export const RECOMMENDFORM_TITLE_FIELD = "response";

export const RecommendformTitle = (record: TRecommendform): string => {
  return record.response?.toString() || String(record.id);
};
