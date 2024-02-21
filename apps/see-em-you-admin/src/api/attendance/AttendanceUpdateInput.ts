import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type AttendanceUpdateInput = {
  status?: number;
  application?: ApplicationWhereUniqueInput;
};
