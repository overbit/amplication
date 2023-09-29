import { UsersInfo as TUsersInfo } from "../api/usersInfo/UsersInfo";

export const USERSINFO_TITLE_FIELD = "additionalinfo";

export const UsersInfoTitle = (record: TUsersInfo): string => {
  return record.additionalinfo?.toString() || String(record.id);
};
