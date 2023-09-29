import { MitsSlateRecommend2 as TMitsSlateRecommend2 } from "../api/mitsSlateRecommend2/MitsSlateRecommend2";

export const MITSSLATERECOMMEND2_TITLE_FIELD = "reference2Title";

export const MitsSlateRecommend2Title = (
  record: TMitsSlateRecommend2
): string => {
  return record.reference2Title?.toString() || String(record.id);
};
