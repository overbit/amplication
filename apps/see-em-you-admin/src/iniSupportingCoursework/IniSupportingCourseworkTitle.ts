import { IniSupportingCoursework as TIniSupportingCoursework } from "../api/iniSupportingCoursework/IniSupportingCoursework";

export const INISUPPORTINGCOURSEWORK_TITLE_FIELD = "dataStructuresTitle";

export const IniSupportingCourseworkTitle = (
  record: TIniSupportingCoursework
): string => {
  return record.dataStructuresTitle?.toString() || String(record.id);
};
