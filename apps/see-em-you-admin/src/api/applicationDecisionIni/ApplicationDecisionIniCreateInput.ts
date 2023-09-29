import { Decimal } from "decimal.js";

export type ApplicationDecisionIniCreateInput = {
  admissionProgramId: number;
  admissionStatus?: number | null;
  applicationId: number;
  choice?: number | null;
  comments?: string | null;
  scholarshipAmt?: Decimal | null;
  scholarshipComments?: string | null;
};
