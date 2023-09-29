import { SlateRecommend as TSlateRecommend } from "../api/slateRecommend/SlateRecommend";

export const SLATERECOMMEND_TITLE_FIELD = "reference1Title";

export const SlateRecommendTitle = (record: TSlateRecommend): string => {
  return record.reference1Title?.toString() || String(record.id);
};
