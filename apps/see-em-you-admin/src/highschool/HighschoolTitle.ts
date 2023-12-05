import { Highschool as THighschool } from "../api/highschool/Highschool";

export const HIGHSCHOOL_TITLE_FIELD = "hsName";

export const HighschoolTitle = (record: THighschool): string => {
  return record.hsName?.toString() || String(record.id);
};
