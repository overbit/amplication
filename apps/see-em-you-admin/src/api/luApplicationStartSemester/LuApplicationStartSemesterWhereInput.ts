import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type LuApplicationStartSemesterWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
