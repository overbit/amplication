import { MhciPrereqsProgrammingSample as TMhciPrereqsProgrammingSample } from "../api/mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSample";

export const MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD = "note";

export const MhciPrereqsProgrammingSampleTitle = (
  record: TMhciPrereqsProgrammingSample
): string => {
  return record.note?.toString() || String(record.id);
};
