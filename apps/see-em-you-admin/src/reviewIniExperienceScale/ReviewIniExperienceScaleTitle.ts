import { ReviewIniExperienceScale as TReviewIniExperienceScale } from "../api/reviewIniExperienceScale/ReviewIniExperienceScale";

export const REVIEWINIEXPERIENCESCALE_TITLE_FIELD = "value";

export const ReviewIniExperienceScaleTitle = (
  record: TReviewIniExperienceScale
): string => {
  return record.value?.toString() || String(record.id);
};
