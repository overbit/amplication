import { IniSupportingCourseworkKobe as TIniSupportingCourseworkKobe } from "../api/iniSupportingCourseworkKobe/IniSupportingCourseworkKobe";

export const INISUPPORTINGCOURSEWORKKOBE_TITLE_FIELD = "description";

export const IniSupportingCourseworkKobeTitle = (
  record: TIniSupportingCourseworkKobe
): string => {
  return record.description?.toString() || String(record.id);
};
