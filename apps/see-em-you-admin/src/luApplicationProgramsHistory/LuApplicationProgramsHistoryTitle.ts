import { LuApplicationProgramsHistory as TLuApplicationProgramsHistory } from "../api/luApplicationProgramsHistory/LuApplicationProgramsHistory";

export const LUAPPLICATIONPROGRAMSHISTORY_TITLE_FIELD = "id";

export const LuApplicationProgramsHistoryTitle = (
  record: TLuApplicationProgramsHistory
): string => {
  return record.id?.toString() || String(record.id);
};
