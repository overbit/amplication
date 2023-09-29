import { PeriodProgram as TPeriodProgram } from "../api/periodProgram/PeriodProgram";

export const PERIODPROGRAM_TITLE_FIELD = "id";

export const PeriodProgramTitle = (record: TPeriodProgram): string => {
  return record.id?.toString() || String(record.id);
};
