import { AttendanceStatusWhereInput } from "./AttendanceStatusWhereInput";
import { AttendanceStatusOrderByInput } from "./AttendanceStatusOrderByInput";

export type AttendanceStatusFindManyArgs = {
  where?: AttendanceStatusWhereInput;
  orderBy?: Array<AttendanceStatusOrderByInput>;
  skip?: number;
  take?: number;
};
