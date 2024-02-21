import { IniDisciplinaryAction as TIniDisciplinaryAction } from "../api/iniDisciplinaryAction/IniDisciplinaryAction";

export const INIDISCIPLINARYACTION_TITLE_FIELD = "sanctionDescription";

export const IniDisciplinaryActionTitle = (
  record: TIniDisciplinaryAction
): string => {
  return record.sanctionDescription?.toString() || String(record.id);
};
