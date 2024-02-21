import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type AttendanceWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
