import { IniDisciplinaryAction as TIniDisciplinaryAction } from "../api/iniDisciplinaryAction/IniDisciplinaryAction";

export const INIDISCIPLINARYACTION_TITLE_FIELD = "retractionDescription";

export const IniDisciplinaryActionTitle = (
  record: TIniDisciplinaryAction
): string => {
  return record.retractionDescription?.toString() || String(record.id);
};
