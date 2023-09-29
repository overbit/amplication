import { Gresubjectscore as TGresubjectscore } from "../api/gresubjectscore/Gresubjectscore";

export const GRESUBJECTSCORE_TITLE_FIELD = "name";

export const GresubjectscoreTitle = (record: TGresubjectscore): string => {
  return record.name?.toString() || String(record.id);
};
