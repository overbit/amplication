import { LuApplicationProgram as TLuApplicationProgram } from "../api/luApplicationProgram/LuApplicationProgram";

export const LUAPPLICATIONPROGRAM_TITLE_FIELD = "round2";

export const LuApplicationProgramTitle = (
  record: TLuApplicationProgram
): string => {
  return record.round2?.toString() || String(record.id);
};
