import { MitsSlateEmploy as TMitsSlateEmploy } from "../api/mitsSlateEmploy/MitsSlateEmploy";

export const MITSSLATEEMPLOY_TITLE_FIELD = "prefix";

export const MitsSlateEmployTitle = (record: TMitsSlateEmploy): string => {
  return record.prefix?.toString() || String(record.id);
};
