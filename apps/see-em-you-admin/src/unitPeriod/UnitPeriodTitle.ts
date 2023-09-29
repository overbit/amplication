import { UnitPeriod as TUnitPeriod } from "../api/unitPeriod/UnitPeriod";

export const UNITPERIOD_TITLE_FIELD = "id";

export const UnitPeriodTitle = (record: TUnitPeriod): string => {
  return record.id?.toString() || String(record.id);
};
