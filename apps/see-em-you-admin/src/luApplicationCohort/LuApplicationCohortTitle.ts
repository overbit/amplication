import { LuApplicationCohort as TLuApplicationCohort } from "../api/luApplicationCohort/LuApplicationCohort";

export const LUAPPLICATIONCOHORT_TITLE_FIELD = "id";

export const LuApplicationCohortTitle = (
  record: TLuApplicationCohort
): string => {
  return record.id?.toString() || String(record.id);
};
