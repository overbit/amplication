import { MseBridgeCourse as TMseBridgeCourse } from "../api/mseBridgeCourse/MseBridgeCourse";

export const MSEBRIDGECOURSE_TITLE_FIELD = "id";

export const MseBridgeCourseTitle = (record: TMseBridgeCourse): string => {
  return record.id?.toString() || String(record.id);
};
