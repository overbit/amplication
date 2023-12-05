import { Period as TPeriod } from "../api/period/Period";

export const PERIOD_TITLE_FIELD = "description";

export const PeriodTitle = (record: TPeriod): string => {
  return record.description?.toString() || String(record.id);
};
