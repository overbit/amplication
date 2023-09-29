import { Recommend as TRecommend } from "../api/recommend/Recommend";

export const RECOMMEND_TITLE_FIELD = "content";

export const RecommendTitle = (record: TRecommend): string => {
  return record.content?.toString() || String(record.id);
};
