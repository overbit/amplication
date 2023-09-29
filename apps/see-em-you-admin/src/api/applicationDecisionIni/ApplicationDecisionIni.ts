import { Decimal } from "decimal.js";

export type ApplicationDecisionIni = {
  admissionProgramId: number;
  admissionStatus: number | null;
  applicationId: number;
  choice: number | null;
  comments: string | null;
  id: string;
  scholarshipAmt: Decimal | null;
  scholarshipComments: string | null;
  timestamp: Date | null;
};
