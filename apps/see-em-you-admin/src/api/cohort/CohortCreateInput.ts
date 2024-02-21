import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type CohortCreateInput = {
  cohortId: number;
  startDate: Date;
  closed: number;
  period?: PeriodWhereUniqueInput | null;
};
