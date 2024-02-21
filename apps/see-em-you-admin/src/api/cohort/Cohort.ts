import { Period } from "../period/Period";

export type Cohort = {
  cohortId: number;
  startDate: Date;
  closed: number;
  period?: Period | null;
  id: number;
};
