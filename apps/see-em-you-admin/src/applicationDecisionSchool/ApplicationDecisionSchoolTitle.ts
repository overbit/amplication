import { ApplicationDecisionSchool as TApplicationDecisionSchool } from "../api/applicationDecisionSchool/ApplicationDecisionSchool";

export const APPLICATIONDECISIONSCHOOL_TITLE_FIELD = "name";

export const ApplicationDecisionSchoolTitle = (
  record: TApplicationDecisionSchool
): string => {
  return record.name?.toString() || String(record.id);
};
