import { MhciPrereqsCourseDatafile as TMhciPrereqsCourseDatafile } from "../api/mhciPrereqsCourseDatafile/MhciPrereqsCourseDatafile";

export const MHCIPREREQSCOURSEDATAFILE_TITLE_FIELD = "note";

export const MhciPrereqsCourseDatafileTitle = (
  record: TMhciPrereqsCourseDatafile
): string => {
  return record.note?.toString() || String(record.id);
};
