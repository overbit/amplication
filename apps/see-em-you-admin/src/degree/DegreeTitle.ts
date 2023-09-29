import { Degree as TDegree } from "../api/degree/Degree";

export const DEGREE_TITLE_FIELD = "name";

export const DegreeTitle = (record: TDegree): string => {
  return record.name?.toString() || String(record.id);
};
