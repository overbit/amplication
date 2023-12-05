import { LuProgramsInterest as TLuProgramsInterest } from "../api/luProgramsInterest/LuProgramsInterest";

export const LUPROGRAMSINTEREST_TITLE_FIELD = "id";

export const LuProgramsInterestTitle = (
  record: TLuProgramsInterest
): string => {
  return record.id?.toString() || String(record.id);
};
