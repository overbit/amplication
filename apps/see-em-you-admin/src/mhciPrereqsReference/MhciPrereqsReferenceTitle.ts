import { MhciPrereqsReference as TMhciPrereqsReference } from "../api/mhciPrereqsReference/MhciPrereqsReference";

export const MHCIPREREQSREFERENCE_TITLE_FIELD = "anovaComment";

export const MhciPrereqsReferenceTitle = (
  record: TMhciPrereqsReference
): string => {
  return record.anovaComment?.toString() || String(record.id);
};
