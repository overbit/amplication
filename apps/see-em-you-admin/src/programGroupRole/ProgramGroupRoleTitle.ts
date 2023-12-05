import { ProgramGroupRole as TProgramGroupRole } from "../api/programGroupRole/ProgramGroupRole";

export const PROGRAMGROUPROLE_TITLE_FIELD = "id";

export const ProgramGroupRoleTitle = (record: TProgramGroupRole): string => {
  return record.id?.toString() || String(record.id);
};
