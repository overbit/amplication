import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AttendanceUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  status?: number;
};
