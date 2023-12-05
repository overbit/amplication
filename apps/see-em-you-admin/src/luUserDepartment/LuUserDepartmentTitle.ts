import { LuUserDepartment as TLuUserDepartment } from "../api/luUserDepartment/LuUserDepartment";

export const LUUSERDEPARTMENT_TITLE_FIELD = "id";

export const LuUserDepartmentTitle = (record: TLuUserDepartment): string => {
  return record.id?.toString() || String(record.id);
};
