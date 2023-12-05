import { Application } from "../application/Application";

export type StudentDecisionHistory = {
  application?: Application | null;
  decision: string | null;
  deferralSemester: string | null;
  deferralYear: string | null;
  id: number;
  insertDate: Date;
  programId: number | null;
};
