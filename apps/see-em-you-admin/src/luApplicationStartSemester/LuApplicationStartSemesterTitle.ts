import { LuApplicationStartSemester as TLuApplicationStartSemester } from "../api/luApplicationStartSemester/LuApplicationStartSemester";

export const LUAPPLICATIONSTARTSEMESTER_TITLE_FIELD = "semester";

export const LuApplicationStartSemesterTitle = (
  record: TLuApplicationStartSemester
): string => {
  return record.semester?.toString() || String(record.id);
};
