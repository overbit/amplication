import { Duolingoscore as TDuolingoscore } from "../api/duolingoscore/Duolingoscore";

export const DUOLINGOSCORE_TITLE_FIELD = "testemail";

export const DuolingoscoreTitle = (record: TDuolingoscore): string => {
  return record.testemail?.toString() || String(record.id);
};
