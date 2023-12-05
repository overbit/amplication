import { MitsSlateRecommend3 as TMitsSlateRecommend3 } from "../api/mitsSlateRecommend3/MitsSlateRecommend3";

export const MITSSLATERECOMMEND3_TITLE_FIELD = "reference3Title";

export const MitsSlateRecommend3Title = (
  record: TMitsSlateRecommend3
): string => {
  return record.reference3Title?.toString() || String(record.id);
};
