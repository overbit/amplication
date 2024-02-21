import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type LuApplicationGroupWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
