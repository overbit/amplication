import { LuApplicationInterest as TLuApplicationInterest } from "../api/luApplicationInterest/LuApplicationInterest";

export const LUAPPLICATIONINTEREST_TITLE_FIELD = "id";

export const LuApplicationInterestTitle = (
  record: TLuApplicationInterest
): string => {
  return record.id?.toString() || String(record.id);
};
