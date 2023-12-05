import { MhciPrereqsReviewer as TMhciPrereqsReviewer } from "../api/mhciPrereqsReviewer/MhciPrereqsReviewer";

export const MHCIPREREQSREVIEWER_TITLE_FIELD = "placeoutPeriodId";

export const MhciPrereqsReviewerTitle = (
  record: TMhciPrereqsReviewer
): string => {
  return record.placeoutPeriodId?.toString() || String(record.id);
};
