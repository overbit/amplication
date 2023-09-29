import { Gmatscore as TGmatscore } from "../api/gmatscore/Gmatscore";

export const GMATSCORE_TITLE_FIELD = "id";

export const GmatscoreTitle = (record: TGmatscore): string => {
  return record.id?.toString() || String(record.id);
};
