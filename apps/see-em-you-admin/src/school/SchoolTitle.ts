import { School as TSchool } from "../api/school/School";

export const SCHOOL_TITLE_FIELD = "name";

export const SchoolTitle = (record: TSchool): string => {
  return record.name?.toString() || String(record.id);
};
