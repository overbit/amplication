import { ApplicationPeriod as TApplicationPeriod } from "../api/applicationPeriod/ApplicationPeriod";

export const APPLICATIONPERIOD_TITLE_FIELD = "id";

export const ApplicationPeriodTitle = (record: TApplicationPeriod): string => {
  return record.id?.toString() || String(record.id);
};
