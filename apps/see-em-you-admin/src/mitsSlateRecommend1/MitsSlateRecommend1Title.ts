import { MitsSlateRecommend1 as TMitsSlateRecommend1 } from "../api/mitsSlateRecommend1/MitsSlateRecommend1";

export const MITSSLATERECOMMEND1_TITLE_FIELD = "reference1Title";

export const MitsSlateRecommend1Title = (
  record: TMitsSlateRecommend1
): string => {
  return record.reference1Title?.toString() || String(record.id);
};
