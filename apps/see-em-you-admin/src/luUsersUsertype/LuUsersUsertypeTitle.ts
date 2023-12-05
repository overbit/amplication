import { LuUsersUsertype as TLuUsersUsertype } from "../api/luUsersUsertype/LuUsersUsertype";

export const LUUSERSUSERTYPE_TITLE_FIELD = "id";

export const LuUsersUsertypeTitle = (record: TLuUsersUsertype): string => {
  return record.id?.toString() || String(record.id);
};
