import { LuProgramsApplicationreq as TLuProgramsApplicationreq } from "../api/luProgramsApplicationreq/LuProgramsApplicationreq";

export const LUPROGRAMSAPPLICATIONREQ_TITLE_FIELD = "id";

export const LuProgramsApplicationreqTitle = (
  record: TLuProgramsApplicationreq
): string => {
  return record.id?.toString() || String(record.id);
};
