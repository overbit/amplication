import { StudentDecision as TStudentDecision } from "../api/studentDecision/StudentDecision";

export const STUDENTDECISION_TITLE_FIELD = "legalName";

export const StudentDecisionTitle = (record: TStudentDecision): string => {
  return record.legalName?.toString() || String(record.id);
};
