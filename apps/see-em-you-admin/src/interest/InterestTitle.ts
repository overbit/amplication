import { Interest as TInterest } from "../api/interest/Interest";

export const INTEREST_TITLE_FIELD = "name";

export const InterestTitle = (record: TInterest): string => {
  return record.name?.toString() || String(record.id);
};
