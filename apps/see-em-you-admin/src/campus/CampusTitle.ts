import { Campus as TCampus } from "../api/campus/Campus";

export const CAMPUS_TITLE_FIELD = "name";

export const CampusTitle = (record: TCampus): string => {
  return record.name?.toString() || String(record.id);
};
