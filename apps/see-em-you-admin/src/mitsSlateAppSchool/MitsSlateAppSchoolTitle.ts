import { MitsSlateAppSchool as TMitsSlateAppSchool } from "../api/mitsSlateAppSchool/MitsSlateAppSchool";

export const MITSSLATEAPPSCHOOL_TITLE_FIELD = "first";

export const MitsSlateAppSchoolTitle = (
  record: TMitsSlateAppSchool
): string => {
  return record.first?.toString() || String(record.id);
};
