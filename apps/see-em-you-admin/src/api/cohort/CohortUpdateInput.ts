import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type CohortUpdateInput = {
  closed?: number;
  cohortId?: number;
  period?: PeriodWhereUniqueInput | null;
  startDate?: Date;
};
