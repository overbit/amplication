import { LuUsersUsertypesOrig as TLuUsersUsertypesOrig } from "../api/luUsersUsertypesOrig/LuUsersUsertypesOrig";

export const LUUSERSUSERTYPESORIG_TITLE_FIELD = "id";

export const LuUsersUsertypesOrigTitle = (
  record: TLuUsersUsertypesOrig
): string => {
  return record.id?.toString() || String(record.id);
};
