import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PeriodApplicationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  period?: PeriodWhereUniqueInput;
  id?: IntFilter;
};
