import { BfDepartment as TBfDepartment } from "../api/bfDepartment/BfDepartment";

export const BFDEPARTMENT_TITLE_FIELD = "bfDepartment";

export const BfDepartmentTitle = (record: TBfDepartment): string => {
  return record.bfDepartment?.toString() || String(record.id);
};
