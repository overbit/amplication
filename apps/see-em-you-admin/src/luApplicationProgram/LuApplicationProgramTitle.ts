import { LuApplicationProgram as TLuApplicationProgram } from "../api/luApplicationProgram/LuApplicationProgram";

export const LUAPPLICATIONPROGRAM_TITLE_FIELD = "admissionStatus";

export const LuApplicationProgramTitle = (
  record: TLuApplicationProgram
): string => {
  return record.admissionStatus?.toString() || String(record.id);
};
