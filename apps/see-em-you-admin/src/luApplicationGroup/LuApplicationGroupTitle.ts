import { LuApplicationGroup as TLuApplicationGroup } from "../api/luApplicationGroup/LuApplicationGroup";

export const LUAPPLICATIONGROUP_TITLE_FIELD = "id";

export const LuApplicationGroupTitle = (
  record: TLuApplicationGroup
): string => {
  return record.id?.toString() || String(record.id);
};
