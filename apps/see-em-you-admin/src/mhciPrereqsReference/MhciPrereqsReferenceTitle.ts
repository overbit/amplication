import { MhciPrereqsReference as TMhciPrereqsReference } from "../api/mhciPrereqsReference/MhciPrereqsReference";

export const MHCIPREREQSREFERENCE_TITLE_FIELD = "content";

export const MhciPrereqsReferenceTitle = (
  record: TMhciPrereqsReference
): string => {
  return record.content?.toString() || String(record.id);
};
