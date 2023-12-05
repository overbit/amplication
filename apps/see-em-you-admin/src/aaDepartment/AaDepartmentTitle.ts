import { AaDepartment as TAaDepartment } from "../api/aaDepartment/AaDepartment";

export const AADEPARTMENT_TITLE_FIELD = "id";

export const AaDepartmentTitle = (record: TAaDepartment): string => {
  return record.id?.toString() || String(record.id);
};
