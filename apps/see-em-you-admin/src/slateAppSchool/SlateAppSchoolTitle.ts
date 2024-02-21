import { SlateAppSchool as TSlateAppSchool } from "../api/slateAppSchool/SlateAppSchool";

export const SLATEAPPSCHOOL_TITLE_FIELD = "prefix";

export const SlateAppSchoolTitle = (record: TSlateAppSchool): string => {
  return record.prefix?.toString() || String(record.id);
};
