import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type PeriodApplicationUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  period?: PeriodWhereUniqueInput;
};
