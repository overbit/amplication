import { MhciSlateAppSchool as TMhciSlateAppSchool } from "../api/mhciSlateAppSchool/MhciSlateAppSchool";

export const MHCISLATEAPPSCHOOL_TITLE_FIELD = "first";

export const MhciSlateAppSchoolTitle = (
  record: TMhciSlateAppSchool
): string => {
  return record.first?.toString() || String(record.id);
};
