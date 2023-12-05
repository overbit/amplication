import { DegreeLevel as TDegreeLevel } from "../api/degreeLevel/DegreeLevel";

export const DEGREELEVEL_TITLE_FIELD = "name";

export const DegreeLevelTitle = (record: TDegreeLevel): string => {
  return record.name?.toString() || String(record.id);
};
