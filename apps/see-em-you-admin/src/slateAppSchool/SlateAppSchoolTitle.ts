import { SlateAppSchool as TSlateAppSchool } from "../api/slateAppSchool/SlateAppSchool";

export const SLATEAPPSCHOOL_TITLE_FIELD = "first";

export const SlateAppSchoolTitle = (record: TSlateAppSchool): string => {
  return record.first?.toString() || String(record.id);
};
