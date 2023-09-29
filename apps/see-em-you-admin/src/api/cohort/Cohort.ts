import { Period } from "../period/Period";

export type Cohort = {
  closed: number;
  cohortId: number;
  id: number;
  period?: Period | null;
  startDate: Date;
};
