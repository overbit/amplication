import { MitsSlateRecommend as TMitsSlateRecommend } from "../api/mitsSlateRecommend/MitsSlateRecommend";

export const MITSSLATERECOMMEND_TITLE_FIELD = "reference1Title";

export const MitsSlateRecommendTitle = (
  record: TMitsSlateRecommend
): string => {
  return record.reference1Title?.toString() || String(record.id);
};
