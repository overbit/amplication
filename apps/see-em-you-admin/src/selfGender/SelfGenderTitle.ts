import { SelfGender as TSelfGender } from "../api/selfGender/SelfGender";

export const SELFGENDER_TITLE_FIELD = "id";

export const SelfGenderTitle = (record: TSelfGender): string => {
  return record.id?.toString() || String(record.id);
};
