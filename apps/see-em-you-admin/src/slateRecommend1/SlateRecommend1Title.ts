import { SlateRecommend1 as TSlateRecommend1 } from "../api/slateRecommend1/SlateRecommend1";

export const SLATERECOMMEND1_TITLE_FIELD = "reference1Title";

export const SlateRecommend1Title = (record: TSlateRecommend1): string => {
  return record.reference1Title?.toString() || String(record.id);
};
