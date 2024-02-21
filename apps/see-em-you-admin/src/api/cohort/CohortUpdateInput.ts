import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type CohortUpdateInput = {
  cohortId?: number;
  startDate?: Date;
  closed?: number;
  period?: PeriodWhereUniqueInput | null;
};
