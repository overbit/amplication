import { MhciPrereqsReviewer as TMhciPrereqsReviewer } from "../api/mhciPrereqsReviewer/MhciPrereqsReviewer";

export const MHCIPREREQSREVIEWER_TITLE_FIELD = "prereqType";

export const MhciPrereqsReviewerTitle = (
  record: TMhciPrereqsReviewer
): string => {
  return record.prereqType?.toString() || String(record.id);
};
