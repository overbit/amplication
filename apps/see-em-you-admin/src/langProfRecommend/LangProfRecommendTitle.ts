import { LangProfRecommend as TLangProfRecommend } from "../api/langProfRecommend/LangProfRecommend";

export const LANGPROFRECOMMEND_TITLE_FIELD = "content";

export const LangProfRecommendTitle = (record: TLangProfRecommend): string => {
  return record.content?.toString() || String(record.id);
};
