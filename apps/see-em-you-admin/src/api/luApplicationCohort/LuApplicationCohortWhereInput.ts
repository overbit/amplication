import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type LuApplicationCohortWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
