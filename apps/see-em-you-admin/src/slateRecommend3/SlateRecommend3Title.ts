import { SlateRecommend3 as TSlateRecommend3 } from "../api/slateRecommend3/SlateRecommend3";

export const SLATERECOMMEND3_TITLE_FIELD = "reference3Title";

export const SlateRecommend3Title = (record: TSlateRecommend3): string => {
  return record.reference3Title?.toString() || String(record.id);
};
