import { DepartmentUnit as TDepartmentUnit } from "../api/departmentUnit/DepartmentUnit";

export const DEPARTMENTUNIT_TITLE_FIELD = "id";

export const DepartmentUnitTitle = (record: TDepartmentUnit): string => {
  return record.id?.toString() || String(record.id);
};
