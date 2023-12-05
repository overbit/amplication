import { DepartmentReplyperiod as TDepartmentReplyperiod } from "../api/departmentReplyperiod/DepartmentReplyperiod";

export const DEPARTMENTREPLYPERIOD_TITLE_FIELD = "id";

export const DepartmentReplyperiodTitle = (
  record: TDepartmentReplyperiod
): string => {
  return record.id?.toString() || String(record.id);
};
