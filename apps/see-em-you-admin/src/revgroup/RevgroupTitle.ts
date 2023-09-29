import { Revgroup as TRevgroup } from "../api/revgroup/Revgroup";

export const REVGROUP_TITLE_FIELD = "name";

export const RevgroupTitle = (record: TRevgroup): string => {
  return record.name?.toString() || String(record.id);
};
