import { IniSop as TIniSop } from "../api/iniSop/IniSop";

export const INISOP_TITLE_FIELD = "additionalInfo";

export const IniSopTitle = (record: TIniSop): string => {
  return record.additionalInfo?.toString() || String(record.id);
};
