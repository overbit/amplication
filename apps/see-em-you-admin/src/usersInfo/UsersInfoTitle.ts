import { UsersInfo as TUsersInfo } from "../api/usersInfo/UsersInfo";

export const USERSINFO_TITLE_FIELD = "gender";

export const UsersInfoTitle = (record: TUsersInfo): string => {
  return record.gender?.toString() || String(record.id);
};
