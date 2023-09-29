import { UsersOrig as TUsersOrig } from "../api/usersOrig/UsersOrig";

export const USERSORIG_TITLE_FIELD = "firstname";

export const UsersOrigTitle = (record: TUsersOrig): string => {
  return record.firstname?.toString() || String(record.id);
};
