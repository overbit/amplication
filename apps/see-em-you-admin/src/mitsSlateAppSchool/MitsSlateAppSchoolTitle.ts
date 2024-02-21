import { MitsSlateAppSchool as TMitsSlateAppSchool } from "../api/mitsSlateAppSchool/MitsSlateAppSchool";

export const MITSSLATEAPPSCHOOL_TITLE_FIELD = "prefix";

export const MitsSlateAppSchoolTitle = (
  record: TMitsSlateAppSchool
): string => {
  return record.prefix?.toString() || String(record.id);
};
