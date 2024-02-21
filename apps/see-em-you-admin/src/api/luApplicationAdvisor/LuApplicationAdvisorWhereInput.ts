import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type LuApplicationAdvisorWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
