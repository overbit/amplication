import { LuProgramsDepartment as TLuProgramsDepartment } from "../api/luProgramsDepartment/LuProgramsDepartment";

export const LUPROGRAMSDEPARTMENT_TITLE_FIELD = "id";

export const LuProgramsDepartmentTitle = (
  record: TLuProgramsDepartment
): string => {
  return record.id?.toString() || String(record.id);
};
