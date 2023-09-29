import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AttendanceCreateInput = {
  application: ApplicationWhereUniqueInput;
  status: number;
};
