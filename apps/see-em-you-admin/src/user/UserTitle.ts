import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "firstname";

export const UserTitle = (record: TUser): string => {
  return record.firstname?.toString() || String(record.id);
};
