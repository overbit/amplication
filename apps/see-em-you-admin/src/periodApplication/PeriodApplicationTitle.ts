import { PeriodApplication as TPeriodApplication } from "../api/periodApplication/PeriodApplication";

export const PERIODAPPLICATION_TITLE_FIELD = "id";

export const PeriodApplicationTitle = (record: TPeriodApplication): string => {
  return record.id?.toString() || String(record.id);
};
