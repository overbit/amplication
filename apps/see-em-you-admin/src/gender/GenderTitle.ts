import { Gender as TGender } from "../api/gender/Gender";

export const GENDER_TITLE_FIELD = "name";

export const GenderTitle = (record: TGender): string => {
  return record.name?.toString() || String(record.id);
};
