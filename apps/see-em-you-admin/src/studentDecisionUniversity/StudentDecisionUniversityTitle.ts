import { StudentDecisionUniversity as TStudentDecisionUniversity } from "../api/studentDecisionUniversity/StudentDecisionUniversity";

export const STUDENTDECISIONUNIVERSITY_TITLE_FIELD = "name";

export const StudentDecisionUniversityTitle = (
  record: TStudentDecisionUniversity
): string => {
  return record.name?.toString() || String(record.id);
};
