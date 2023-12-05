import { SlateRecommend2 as TSlateRecommend2 } from "../api/slateRecommend2/SlateRecommend2";

export const SLATERECOMMEND2_TITLE_FIELD = "reference2Title";

export const SlateRecommend2Title = (record: TSlateRecommend2): string => {
  return record.reference2Title?.toString() || String(record.id);
};
