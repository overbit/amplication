import { Usertype as TUsertype } from "../api/usertype/Usertype";

export const USERTYPE_TITLE_FIELD = "name";

export const UsertypeTitle = (record: TUsertype): string => {
  return record.name?.toString() || String(record.id);
};
