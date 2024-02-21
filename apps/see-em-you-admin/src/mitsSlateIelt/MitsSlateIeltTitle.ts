import { MitsSlateIelt as TMitsSlateIelt } from "../api/mitsSlateIelt/MitsSlateIelt";

export const MITSSLATEIELT_TITLE_FIELD = "prefix";

export const MitsSlateIeltTitle = (record: TMitsSlateIelt): string => {
  return record.prefix?.toString() || String(record.id);
};
