import { IniSop as TIniSop } from "../api/iniSop/IniSop";

export const INISOP_TITLE_FIELD = "objective";

export const IniSopTitle = (record: TIniSop): string => {
  return record.objective?.toString() || String(record.id);
};
