import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type PeriodApplicationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  period?: PeriodWhereUniqueInput;
};
