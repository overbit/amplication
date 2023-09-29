import { LangProfRecommenderInfo as TLangProfRecommenderInfo } from "../api/langProfRecommenderInfo/LangProfRecommenderInfo";

export const LANGPROFRECOMMENDERINFO_TITLE_FIELD = "title";

export const LangProfRecommenderInfoTitle = (
  record: TLangProfRecommenderInfo
): string => {
  return record.title?.toString() || String(record.id);
};
