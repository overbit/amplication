import { Decimal } from "decimal.js";

export type ApplicationDecisionIniUpdateInput = {
  applicationId?: number;
  admissionProgramId?: number;
  choice?: number | null;
  admissionStatus?: number | null;
  comments?: string | null;
  scholarshipAmt?: Decimal | null;
  scholarshipComments?: string | null;
};
