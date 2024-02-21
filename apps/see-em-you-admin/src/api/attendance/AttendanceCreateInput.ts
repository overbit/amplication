import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AttendanceCreateInput = {
  status: number;
  application: ApplicationWhereUniqueInput;
};
