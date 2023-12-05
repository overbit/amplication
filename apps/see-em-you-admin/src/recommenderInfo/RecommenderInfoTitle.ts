import { RecommenderInfo as TRecommenderInfo } from "../api/recommenderInfo/RecommenderInfo";

export const RECOMMENDERINFO_TITLE_FIELD = "title";

export const RecommenderInfoTitle = (record: TRecommenderInfo): string => {
  return record.title?.toString() || String(record.id);
};
