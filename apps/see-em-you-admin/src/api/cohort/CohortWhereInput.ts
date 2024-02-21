import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type CohortWhereInput = {
  period?: PeriodWhereUniqueInput;
  id?: IntFilter;
};
