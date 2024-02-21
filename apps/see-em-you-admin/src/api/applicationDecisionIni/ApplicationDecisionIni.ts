import { Decimal } from "decimal.js";

export type ApplicationDecisionIni = {
  applicationId: number;
  admissionProgramId: number;
  choice: number | null;
  admissionStatus: number | null;
  comments: string | null;
  scholarshipAmt: Decimal | null;
  scholarshipComments: string | null;
  timestamp: Date | null;
  id: string;
};
