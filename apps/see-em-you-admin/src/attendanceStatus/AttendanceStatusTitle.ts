import { AttendanceStatus as TAttendanceStatus } from "../api/attendanceStatus/AttendanceStatus";

export const ATTENDANCESTATUS_TITLE_FIELD = "value";

export const AttendanceStatusTitle = (record: TAttendanceStatus): string => {
  return record.value?.toString() || String(record.id);
};
