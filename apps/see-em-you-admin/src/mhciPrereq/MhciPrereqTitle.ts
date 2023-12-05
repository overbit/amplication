import { MhciPrereq as TMhciPrereq } from "../api/mhciPrereq/MhciPrereq";

export const MHCIPREREQ_TITLE_FIELD = "id";

export const MhciPrereqTitle = (record: TMhciPrereq): string => {
  return record.id?.toString() || String(record.id);
};
