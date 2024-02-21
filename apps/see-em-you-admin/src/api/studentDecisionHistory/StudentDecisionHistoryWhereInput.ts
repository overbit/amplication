import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type StudentDecisionHistoryWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
