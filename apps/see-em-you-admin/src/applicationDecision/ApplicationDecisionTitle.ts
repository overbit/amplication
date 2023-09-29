import { ApplicationDecision as TApplicationDecision } from "../api/applicationDecision/ApplicationDecision";

export const APPLICATIONDECISION_TITLE_FIELD = "admissionStatus";

export const ApplicationDecisionTitle = (
  record: TApplicationDecision
): string => {
  return record.admissionStatus?.toString() || String(record.id);
};
