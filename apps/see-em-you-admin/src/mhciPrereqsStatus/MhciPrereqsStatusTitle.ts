import { MhciPrereqsStatus as TMhciPrereqsStatus } from "../api/mhciPrereqsStatus/MhciPrereqsStatus";

export const MHCIPREREQSSTATUS_TITLE_FIELD = "reviewerExplanation";

export const MhciPrereqsStatusTitle = (record: TMhciPrereqsStatus): string => {
  return record.reviewerExplanation?.toString() || String(record.id);
};
