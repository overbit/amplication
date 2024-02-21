import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type LuApplicationAppreqWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
