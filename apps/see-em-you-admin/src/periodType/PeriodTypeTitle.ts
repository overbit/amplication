import { PeriodType as TPeriodType } from "../api/periodType/PeriodType";

export const PERIODTYPE_TITLE_FIELD = "periodType";

export const PeriodTypeTitle = (record: TPeriodType): string => {
  return record.periodType?.toString() || String(record.id);
};
