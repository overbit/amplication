import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type PeriodApplicationCreateInput = {
  application: ApplicationWhereUniqueInput;
  period: PeriodWhereUniqueInput;
};
