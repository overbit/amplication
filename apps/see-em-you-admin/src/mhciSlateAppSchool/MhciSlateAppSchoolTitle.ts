import { MhciSlateAppSchool as TMhciSlateAppSchool } from "../api/mhciSlateAppSchool/MhciSlateAppSchool";

export const MHCISLATEAPPSCHOOL_TITLE_FIELD = "prefix";

export const MhciSlateAppSchoolTitle = (
  record: TMhciSlateAppSchool
): string => {
  return record.prefix?.toString() || String(record.id);
};
