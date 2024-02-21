import { UsersOrig as TUsersOrig } from "../api/usersOrig/UsersOrig";

export const USERSORIG_TITLE_FIELD = "username";

export const UsersOrigTitle = (record: TUsersOrig): string => {
  return record.username?.toString() || String(record.id);
};
