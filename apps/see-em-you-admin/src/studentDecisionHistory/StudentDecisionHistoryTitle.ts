import { StudentDecisionHistory as TStudentDecisionHistory } from "../api/studentDecisionHistory/StudentDecisionHistory";

export const STUDENTDECISIONHISTORY_TITLE_FIELD = "decision";

export const StudentDecisionHistoryTitle = (
  record: TStudentDecisionHistory
): string => {
  return record.decision?.toString() || String(record.id);
};
