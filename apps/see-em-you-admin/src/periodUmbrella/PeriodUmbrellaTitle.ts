import { PeriodUmbrella as TPeriodUmbrella } from "../api/periodUmbrella/PeriodUmbrella";

export const PERIODUMBRELLA_TITLE_FIELD = "umbrellaName";

export const PeriodUmbrellaTitle = (record: TPeriodUmbrella): string => {
  return record.umbrellaName?.toString() || String(record.id);
};
