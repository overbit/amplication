import { MhciPrereqsCourse as TMhciPrereqsCourse } from "../api/mhciPrereqsCourse/MhciPrereqsCourse";

export const MHCIPREREQSCOURSE_TITLE_FIELD = "studentCourseName";

export const MhciPrereqsCourseTitle = (record: TMhciPrereqsCourse): string => {
  return record.studentCourseName?.toString() || String(record.id);
};
