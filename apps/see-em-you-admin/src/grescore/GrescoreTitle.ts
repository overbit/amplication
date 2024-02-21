import { Grescore as TGrescore } from "../api/grescore/Grescore";

export const GRESCORE_TITLE_FIELD = "verbalscore";

export const GrescoreTitle = (record: TGrescore): string => {
  return record.verbalscore?.toString() || String(record.id);
};
