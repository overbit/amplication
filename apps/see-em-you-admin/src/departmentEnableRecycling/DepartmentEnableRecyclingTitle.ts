import { DepartmentEnableRecycling as TDepartmentEnableRecycling } from "../api/departmentEnableRecycling/DepartmentEnableRecycling";

export const DEPARTMENTENABLERECYCLING_TITLE_FIELD = "id";

export const DepartmentEnableRecyclingTitle = (
  record: TDepartmentEnableRecycling
): string => {
  return record.id?.toString() || String(record.id);
};
