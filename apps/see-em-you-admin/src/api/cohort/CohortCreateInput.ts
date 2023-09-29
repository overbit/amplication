import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type CohortCreateInput = {
  closed: number;
  cohortId: number;
  period?: PeriodWhereUniqueInput | null;
  startDate: Date;
};
