import { Application } from "../application/Application";

export type StudentDecisionHistory = {
  programId: number | null;
  decision: string | null;
  deferralSemester: string | null;
  deferralYear: string | null;
  insertDate: Date;
  application?: Application | null;
  id: number;
};
